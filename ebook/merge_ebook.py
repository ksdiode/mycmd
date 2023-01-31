from PyPDF2 import PdfMerger

import os
from os import path
import glob

def merge(argv):
  if argv:
    output = argv[0]
  else:
    output = input('Merge 파일명> ')

  dir = path.abspath(os.curdir)
  files = glob.glob(path.join(dir, '*.pdf'))
  files.sort()

  merger = PdfMerger()
  for pdf in files:
    print('변환중...', pdf)
    merger.append(pdf)

  merger.write(output + '.pdf')
  merger.close()