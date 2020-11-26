from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from random import randint

username = input("Username/Email: ")
password = input("Password: ")
hashinput = input("#")


class InstaBot:
    links = []

    comments = [
        "Good post!", "Nice!", "Wow! Keep up the good posts!", "Amazing!",
        "Nice picture!", "Good pic!", "Good vibes", "Nice one!", "Dope!"
    ]

    def __init__(self):
        self.driver = webdriver.Chrome('C:/users/denisas/chromedriver.exe')
        self.driver.get("https://www.instagram.com/")
        sleep(1)
        self.driver.find_element_by_xpath("/html/body/div[2]/div/div/div/div[2]/button[1]").click()
        sleep(1)
        self.driver.find_element_by_xpath("//*[@id='loginForm']/div/div[1]/div/label/input") \
            .send_keys(username)
        self.driver.find_element_by_xpath("//*[@id='loginForm']/div/div[2]/div/label/input") \
            .send_keys(password)
        sleep(1)
        self.driver.find_element_by_xpath("//*[@id='loginForm']/div/div[3]/button/div").click()
        sleep(5)
        self.driver.find_element_by_xpath('//*[@id="react-root"]/section/main/div/div/div/div').click()
        sleep(2)
        self.driver.find_element_by_xpath('/html/body/div[4]/div/div/div/div[3]/button[2]').click()
        sleep(1)

    def search_by_tag(self, hashtag):
        search_box = self.driver.find_element_by_xpath('//input[@placeholder="Search"]')
        search_box.send_keys("#" + hashtag)
        sleep(3)
        self.driver.find_element_by_xpath('/html/body/div[1]/section/nav/div[2]/div/div/div[2]/div[4]/div/a[1]') \
            .send_keys(Keys.ENTER)
        sleep(3)
        links = self.driver.find_elements_by_tag_name("a")

        def condition(link):
            return ".com/p/" in link.get_attribute("href")

        valid_links = list(filter(condition, links))

        for i in range(8):
            link = valid_links[i].get_attribute('href')
            if link not in self.links:
                self.links.append(link)
        for link in self.links:
            self.driver.get(link)
            sleep(1)
            # like
            self.driver.find_element_by_xpath(
                "//*[@id='react-root']/section/main/div/div[1]/article/div[3]/section[1]/span[1]/button").click()
            sleep(1)
            # comment
            self.driver.find_element_by_class_name("RxpZH").click()
            sleep(1)
            self.driver.find_element_by_xpath("//textarea[@placeholder='Add a comment…']")\
                .send_keys(self.comments[randint(0, 8)])
            sleep(1)
            self.driver.find_element_by_xpath("/html/body/div[1]/section/main/div/div[1]/article/div[3]/section["
                                              "3]/div/form/button").click()
            sleep(4)


my_bot = InstaBot()
my_bot.search_by_tag(hashinput)
