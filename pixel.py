import requests
import re
import datetime


base_url = {
    False: 'https://source.android.com/security/bulletin/pixel',
    True: 'https://source.android.google.cn/security/bulletin/pixel'
}
useGoogleCN = True


def get_latest_bulletin():
    latest_date = get_latest_bulletin_date()
    return latest_date, base_url[useGoogleCN] + '/' + latest_date


def get_latest_bulletin_date():
    current_time = datetime.datetime.now()
    bulletin_response = get_bulletin_by_date(current_time.year, current_time.month, 1)
    if bulletin_response.status_code == 200:
        return __ymd_to_date__(current_time.year, current_time.month, 1)
    else:
        return find_last_bulletin_date(current_time.year, current_time.month, 1)


def find_last_bulletin_date(year: int, month: int, day: int):
    if month == 1:
        year = year - 1
        month = 12
    else:
        month = month - 1
    bulletin_response = get_bulletin_by_date(year, month, day)
    if bulletin_response.status_code == 200:
        new_date = __ymd_to_date__(year, month, day)
        return new_date
    else:
        return find_last_bulletin_date(year, month, day)


def get_bulletin_by_date(year: int, month: int, day: int):
    return __send_request__('/' + __ymd_to_date__(year, month, day))


def __send_request__(path: str):
    response = requests.get(base_url[useGoogleCN] + path)
    return response


def __ymd_to_date__(year: int, month: int, day: int):
    req_year = str(year)
    req_month = '0' + str(month) if 0 < month < 10 else str(month)
    req_day = '0' + str(day) if 0 < month < 10 else str(day)
    return req_year + '-' + req_month + '-' + req_day


def __date_to_ymd__(date: str):
    date_list = re.findall('([0-9]+?)-([0-1][0-9]+?)-([0-3][0-9]?)', date)[0]
    return int(date_list[0]), int(date_list[1]), int(date_list[2])


def do():
    print(get_latest_bulletin())
