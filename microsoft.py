import requests
import re
import datetime


base_url = 'https://msrc.microsoft.com/update-guide/releaseNote'

month_table = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
}

def get_latest_release_note():
    latest_date = get_latest_release_note_date()
    return latest_date, base_url + '/' + latest_date


def get_latest_release_note_date():
    current_time = datetime.datetime.now()
    release_note_response = get_release_note_by_date(current_time.year, current_time.month)
    if release_note_response.status_code == 200:
        return __ymd_to_date__(current_time.year, current_time.month)
    else:
        return find_last_release_note_date(current_time.year, current_time.month)


def find_last_release_note_date(year: int, month: int):
    if month == 1:
        year = year - 1
        month = 12
    else:
        month = month - 1
    release_note_response = get_release_note_by_date(year, month)
    if release_note_response.status_code == 200:
        new_date = __ymd_to_date__(year, month)
        return new_date
    else:
        return find_last_release_note_date(year, month)


def get_release_note_by_date(year: int, month: int):
    return __send_request__('/' + __ymd_to_date__(year, month))


def __send_request__(path: str):
    response = requests.get(base_url + path)
    return response


def __ymd_to_date__(year: int, month: int):
    req_year = str(year)
    req_month = month_table[month]
    return req_year + '-' + req_month

def do():
    print(get_latest_release_note())
