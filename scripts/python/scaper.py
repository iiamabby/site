import time
import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# This web scraper is responsible for pulling in the good-first issues from the cloudnative.nz website
# First we need to setup the requirments for BeutifulSoup and Chromium due to the way github loads content
# Then we need to save the response to a .json file 
# We should ensure the new issues are appended to the current .json file if exists
# There should be no duplicates. e.g. only add the new responses
# We should also check to makesure any issues that have been completed are removed from the .json file
#pip3 install beautiful4 && pip3 install requests && pip3 install selenium


def scrape_github_issues(username, repository):
    url = f'https://github.com/{username}/{repository}/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22'

    options = Options()
    options.add_argument('--headless')  # Run the browser in headless mode (no GUI)
    driver = webdriver.Chrome(options=options)

    driver.get(url)
    time.sleep(5)  # Allow time for the page to load

    soup = BeautifulSoup(driver.page_source, 'html.parser')

    good_first_issues = []

    #find all of the issues, we dont need need to specify labels here as that is passed through the url
    issues_list = soup.find_all('div', {'class': 'js-issue-row'})
    for issue in issues_list:
        title = issue.find('a', {'class': 'Link--primary'}).text.strip()
        link = 'https://github.com' + issue.find('a', {'class': 'Link--primary'})['href']
        user_element = issue.find('a', {'class': 'Link--muted'})
        user = user_element.text.strip() if user_element else None
        date_created_element = issue.find('relative-time', {'class': 'no-wrap'})
        date_created = date_created_element['datetime'] if date_created_element else None
        
        # Extract issue number from issue URL
        issue_number = int(link.split('/')[-1]) if link else None

        # Visit the issue page to get the first comment
        driver.get(link)
        time.sleep(5)  # Allow time for the page to load
        issue_page_soup = BeautifulSoup(driver.page_source, 'html.parser')
        first_comment_element = issue_page_soup.find('div', {'class': 'edit-comment-hide'})
        first_comment = first_comment_element.find('td', {'class': 'd-block comment-body markdown-body js-comment-body'}).get_text(strip=True)
        
        # Append all the information to each issue into our array
        good_first_issues.append({
            'issue_number': issue_number,
            'title': title,
            'link': link,
            'user': user,
            'date_created': date_created,
            'first_comment': first_comment
        })

    driver.quit()

    return good_first_issues

# save the issues into the output file
def save_issues_to_json(issues, output_file):
    with open(output_file, 'w') as json_file:
        json.dump(issues, json_file, indent=4)

def main():
    username = 'iiamabby'
    repository = 'community-webpage'
    output_file = 'good_first_issues.json'

    #first we find and store the issues
    issues = scrape_github_issues(username, repository)
    #then we write it to the file
    save_issues_to_json(issues, output_file)

if __name__ == '__main__':
    main()
