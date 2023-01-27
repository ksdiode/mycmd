db = {
    'user'     : 'root',
    'password' : 'test1234',
    'host'     : 'localhost',
    'port'     : 3306,
    'database' : 'miniter'
}



DEBUG=True
SECRET_KEY = 'this is secret'
TEMPLATES_AUTO_RELOAD=True
# mysqlclient 용 접속 URL conda install mysqlclient
DB_URL = f"mysql+mysqldb://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"
