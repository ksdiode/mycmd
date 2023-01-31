import sys
from merge_ebook import merge
from ebook_make import make_ebook
from ebook_image import convert

cmd = sys.argv[1]
argv = sys.argv[2:]

if cmd == 'merge':
  merge(argv)
elif cmd == 'make':
  make_ebook(argv)
elif cmd == 'image':
  convert(argv)
else:
  print(f'{cmd}: 알 수 없는 명령입니다.')