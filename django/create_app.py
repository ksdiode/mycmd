import sys
from os import path
from copy_template import *

template_path = path.join(path.dirname(__file__), 'templates', 'app')

def make_app(argv):
  app = argv[0]
  word_map = get_info(app)  # 모델 정보 획득
  dest = path.join(os.curdir, app) # 목적지
  print(template_path, dest)
  copy_template(template_path, dest, word_map)
  
if __name__ == '__main__':
  argv = sys.argv[2:]
  print(argv, sys.argv)
  make_app(argv)