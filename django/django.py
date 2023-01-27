import sys
from create_app import *

cmd = sys.argv[1]
argv = sys.argv[2:]


if cmd == 'app':
  make_app(argv)