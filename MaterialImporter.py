#!/usr/bin/env python
# coding: utf-8

# In[1]:


import sys
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QMainWindow, QDesktopWidget, QHBoxLayout, QVBoxLayout, QLabel, QComboBox, QCheckBox, QMessageBox, QRadioButton, QGroupBox
from PyQt5.QtCore import QCoreApplication, Qt
from PyQt5.QtGui import QIcon
from urllib.request import urlopen
from urllib.request import Request
from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
import os

class Waiting(QWidget):
    
    def __init__(self, parent=None):
        super().__init__()
        self.title = 'Read!'
        self.width = 320
        self.height = 200
        self.initUI()
        
    def initUI(self):
        self.resize(self.width, self.height)
        self.center()
        self.setWindowTitle(self.title)
        
        buttonReply = QMessageBox.information(self, 'Notice', "Click (Yes), and wait about 20 sec (single rating) or 2 min (all rating).\nProgram will be pause until end the process!", QMessageBox.Yes)
        
    def center(self):
        qr = self.frameGeometry()
        cp = QDesktopWidget().availableGeometry().center()
        qr.moveCenter(cp)
        self.move(qr.topLeft())
        
class Finished(QWidget):
    
    def __init__(self, parent=None):
        super().__init__()
        self.title = 'Finished!'
        self.width = 320
        self.height = 200
        self.initUI()
        self.center()
        
    def initUI(self):
        self.resize(self.width, self.height)
        self.center()
        self.setWindowTitle(self.title)
        
        buttonReply = QMessageBox.information(self, 'Finished!', "Data Imported!", QMessageBox.Ok)
        
    def center(self):
        qr = self.frameGeometry()
        cp = QDesktopWidget().availableGeometry().center()
        qr.moveCenter(cp)
        self.move(qr.topLeft())

class MyWidget(QWidget):
    # 다른 함수에서 사용하기 위해 여기에 선언
    
    def __init__(self):
        # Desktop 디렉토리
        self.homepath = os.path.expanduser('~')
        self.desktoppath = os.path.join(self.homepath, 'Desktop')
        
        super().__init__()
        
        label = QLabel('Rating Select', self)
        label.setAlignment(Qt.AlignCenter)
        
        self.cb = QComboBox(self)
        self.cb.addItem('82')
        self.cb.addItem('83')
        self.cb.addItem('84')
        self.cb.addItem('85')
        self.cb.addItem('86')
        self.cb.addItem('87')
        self.cb.addItem('88')
        self.cb.addItem('89')
        
        self.chb = QCheckBox('Contain zero prices?', self)
        
        self.rad1 = QRadioButton('ps', self)
        self.rad2 = QRadioButton('pc', self)
        self.rad3 = QRadioButton('xbox', self)
        
        self.rad1.clicked.connect(self.radioButtonClicked)
        self.rad2.clicked.connect(self.radioButtonClicked)
        self.rad3.clicked.connect(self.radioButtonClicked)
        
        groupBox = QGroupBox("Select Platform")
        gb_layout = QHBoxLayout()
        groupBox.setLayout(gb_layout)
        
        gb_layout.addWidget(self.rad1)
        gb_layout.addWidget(self.rad2)
        gb_layout.addWidget(self.rad3)
        
        importButton = QPushButton('Import!')
        allImportButton = QPushButton('Import All!')

        hbox = QHBoxLayout()
        hbox.addStretch(1)
        hbox.addWidget(label)
        hbox.addStretch(1)
        hbox.addWidget(groupBox)
        hbox.addStretch(1)
        
        hbox2 = QHBoxLayout()
        hbox2.addStretch(1)
        hbox2.addWidget(self.cb)
        hbox2.addStretch(1)
        hbox2.addWidget(self.chb)
        hbox2.addStretch(1)
        
        hbox3 = QHBoxLayout()
        hbox3.addStretch(1)
        hbox3.addWidget(importButton)
        hbox3.addStretch(1)
        hbox3.addWidget(allImportButton)
        hbox3.addStretch(1)

        vbox = QVBoxLayout()
        vbox.addStretch(1)
        vbox.addLayout(hbox)
        vbox.addStretch(1)
        vbox.addLayout(hbox2)
        vbox.addStretch(1)
        vbox.addLayout(hbox3)
        vbox.addStretch(1)
        self.setLayout(vbox)
        
        importButton.clicked.connect(self.crawler_start)
        allImportButton.clicked.connect(self.crawl_all)

    def radioButtonClicked(self):
        self.platform = ""
        
        if self.rad1.isChecked():
            self.platform = self.rad1.text()
        elif self.rad2.isChecked():
            self.platform = self.rad2.text()
        elif self.rad3.isChecked():
            self.platform = self.rad3.text()
    
    def crawler_start(self):
        Waiting(self)
        
        last_page = 1
        rating = self.cb.currentText()
        
        fullUrl = "https://www.futbin.com/players?page=" + str(last_page) + "&player_rating=" + str(rating) + "-" + str(rating) + "&sort=" + self.platform + "_price&order=asc"
        
        plat_num = 0
        
        if self.platform == 'ps':
            plat_num = 1
        elif self.platform == 'pc':
            plat_num = 3
        elif self.platform == 'xbox':
            plat_num = 2

        options = Options()
        options.add_argument('headless')
        options.add_argument("disable-gpu")

        driver = webdriver.Chrome('chromedriver', options=options)
        driver.set_window_size(800, 600)

        # get html to url
        driver.get(fullUrl)
        driver.implicitly_wait(3)
        driver.find_element_by_xpath('//*[@id="desk-nav"]/div/a[2]/i').click()
        driver.implicitly_wait(3)
        driver.find_element_by_xpath('//*[@id="slide-out"]/ul/li[2]/ul/li[2]/a').click()
        driver.implicitly_wait(3)
        driver.find_element_by_xpath('//*[@id="slide-out"]/ul/li[2]/ul/li[2]/div/ul/li[' + str(plat_num) + ']/a').click()
        driver.implicitly_wait(3)
        driver.set_window_size(1920, 1080)
        driver.implicitly_wait(3)
        
        req = driver.page_source
        bsObject = BeautifulSoup(req, 'html.parser')
        
        pages = []

        # import last page num
        page_list = bsObject.select('div.col-md-12 > nav > ul')
        for lists in page_list:
            page_row = lists.select('li')
            for page_fields in page_row:
                page = page_fields.text
                pages.append(page.strip())

        last_page = int(pages[-2])
        
        names = []
        clns = []
        clubs = []
        leagues = []
        nations = []
        positions = []
        versions = []
        prices = []

        for i in range(1, len(pages)+1):
            fullUrl = "https://www.futbin.com/players?page=" + str(i) + "&player_rating=" + str(rating) + "-" + str(rating) + "&sort=" + self.platform + "_price&order=asc"
            driver.get(fullUrl)
            req = driver.page_source
            bsObject = BeautifulSoup(req, "html.parser")

            character_list = bsObject.select('#repTb > tbody > tr')
            for lists in character_list:
                # import names
                name_row = lists.select('td > div > div > a')
                for name_fields in name_row:
                    name = name_fields.text
                    names.append(name.strip())

                # import clubs, leagues, nations
                cln_row = lists.select('span.players_club_nation > a')
                for cln_fields in cln_row:
                    cln = cln_fields['data-original-title']
                    clns.append(cln.strip())

                # import position and price
                position_row = lists.select('td')
                i = 0
                for position_fields in position_row:
                    position = position_fields.text
                    if i == 2:
                        positions.append(position.strip())
                    elif i == 4:
                        price = position.strip()
                        if price[-1] == 'K':
                            price = (float(price[:-1]) * 1000)
                        elif price[-1] == 'M':
                            price = (float(price[:-1]) * 100000)
                        prices.append(int(price))
                    i += 1

                # import version
                version_row = lists.select('td.mobile-hide-table-col')
                for version_fields in version_row:
                    version = version_fields.text
                    versions.append(version.strip())

        # import rating
        rates = [rating for _ in range(len(names))]

        for i in range(int(len(clns) / 3)):
            clubs.append(clns[i*3])
            leagues.append(clns[i*3+2])
            nations.append(clns[i*3+1])
        
        character_df = pd.DataFrame({'Name':names, 'Club':clubs, 'League':leagues, 'Nation':nations, 'Rating':rates, 'Position':positions, 'Version':versions, 'Price':prices})
        now = time.localtime()
        
        if self.chb.isChecked() == False:
            character_df = character_df[character_df['Price'] != 0]
            
        character_df.to_csv(self.desktoppath + "\%04d%02d%02d_%02d_%02d_%02d_"%(now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec) + self.platform + "_" + str(rating) + "_rating" + ".csv", index=False, encoding='utf-8-sig')
        driver.close()
        Finished(self)
        
    def crawl_all(self):
        Waiting(self)
        
        output_df = None
        rating_list = list(range(82, 90))
        
        for rating in rating_list:
            last_page = 1

            fullUrl = "https://www.futbin.com/players?page=" + str(last_page) + "&player_rating=" + str(rating) + "-" + str(rating) + "&sort=" + self.platform + "_price&order=asc"

            plat_num = 0
        
            if self.platform == 'ps':
                plat_num = 1
            elif self.platform == 'pc':
                plat_num = 3
            elif self.platform == 'xbox':
                plat_num = 2

            options = Options()
            options.add_argument('headless')
            options.add_argument("disable-gpu")

            driver = webdriver.Chrome('chromedriver', options=options)
            driver.set_window_size(800, 600)

            # get html to url
            driver.get(fullUrl)
            driver.implicitly_wait(3)
            driver.find_element_by_xpath('//*[@id="desk-nav"]/div/a[2]/i').click()
            driver.implicitly_wait(3)
            driver.find_element_by_xpath('//*[@id="slide-out"]/ul/li[2]/ul/li[2]/a').click()
            driver.implicitly_wait(3)
            driver.find_element_by_xpath('//*[@id="slide-out"]/ul/li[2]/ul/li[2]/div/ul/li[' + str(plat_num) + ']/a').click()
            driver.implicitly_wait(3)
            driver.set_window_size(1920, 1080)
            driver.implicitly_wait(3)

            req = driver.page_source
            bsObject = BeautifulSoup(req, 'html.parser')

            pages = []

            # import last page num
            page_list = bsObject.select('div.col-md-12 > nav > ul')
            for lists in page_list:
                page_row = lists.select('li')
                for page_fields in page_row:
                    page = page_fields.text
                    pages.append(page.strip())

            last_page = int(pages[-2])

            names = []
            clns = []
            clubs = []
            leagues = []
            nations = []
            positions = []
            versions = []
            prices = []

            for i in range(1, len(pages)+1):
                fullUrl = "https://www.futbin.com/players?page=" + str(i) + "&player_rating=" + str(rating) + "-" + str(rating) + "&sort=" + self.platform + "_price&order=asc"
                driver.get(fullUrl)
                req = driver.page_source
                bsObject = BeautifulSoup(req, "html.parser")

                character_list = bsObject.select('#repTb > tbody > tr')
                for lists in character_list:
                    # import names
                    name_row = lists.select('td > div > div > a')
                    for name_fields in name_row:
                        name = name_fields.text
                        names.append(name.strip())

                    # import clubs, leagues, nations
                    cln_row = lists.select('span.players_club_nation > a')
                    for cln_fields in cln_row:
                        cln = cln_fields['data-original-title']
                        clns.append(cln.strip())

                    # import position and price
                    position_row = lists.select('td')
                    i = 0
                    for position_fields in position_row:
                        position = position_fields.text
                        if i == 2:
                            positions.append(position.strip())
                        elif i == 4:
                            price = position.strip()
                            if price[-1] == 'K':
                                price = (float(price[:-1]) * 1000)
                            elif price[-1] == 'M':
                                price = (float(price[:-1]) * 100000)
                            prices.append(int(price))
                        i += 1

                    # import version
                    version_row = lists.select('td.mobile-hide-table-col')
                    for version_fields in version_row:
                        version = version_fields.text
                        versions.append(version.strip())

            # import rating
            rates = [rating for _ in range(len(names))]

            for i in range(int(len(clns) / 3)):
                clubs.append(clns[i*3])
                leagues.append(clns[i*3+2])
                nations.append(clns[i*3+1])

            character_df = pd.DataFrame({'Name':names, 'Club':clubs, 'League':leagues, 'Nation':nations, 'Rating':rates, 'Position':positions, 'Version':versions, 'Price':prices})
                
            if type(output_df) == None:
                output_df = character_df
            else:
                output_df = pd.concat([output_df, character_df])
            
            now = time.localtime()

            if self.chb.isChecked() == False:
                output_df = output_df[output_df['Price'] != 0]
        output_df.to_csv(self.desktoppath + "\%04d%02d%02d_%02d_%02d_%02d_"%(now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec) + self.platform + "_all_rating" + ".csv", index=False, encoding='utf-8-sig')
        driver.close()
        
        Finished(self)
        
class MyApp(QMainWindow):

    def __init__(self):
        super().__init__()

        self.initUI()

    def initUI(self):

        wg = MyWidget()
        self.setCentralWidget(wg)
        
        self.statusBar().showMessage('Copyright 2019. Momentum96(Jeon Geon Woo). All rights reserved.')
        self.setWindowTitle('(EN) FIFA20 Material Price Simple Importer v1.0')
        self.setWindowIcon(QIcon('logo.png'))
        self.resize(500, 400)
        self.center()
        self.show()
    
    def center(self):
        qr = self.frameGeometry()
        cp = QDesktopWidget().availableGeometry().center()
        qr.moveCenter(cp)
        self.move(qr.topLeft())

if __name__ == '__main__':

    app = QApplication(sys.argv)
    ex = MyApp()
    sys.exit(app.exec_())


# In[ ]:




