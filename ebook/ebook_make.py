import os
from os import path
# from PIL import Image
from img2pdf import convert

def mkdir(dirname):
  base = '..\\pdf\\' + dirname
  if not path.exists(base):
    os.makedirs(base)
  return base

def make_ebook(argv):
  dirname = path.abspath(os.curdir).split('\\')[-1]
  print(dirname)

  dirs = os.listdir()
  for name in dirs:
    if path.isfile(name): continue
    jpg_list = []
    for fname in os.listdir(name):    
      if not fname.endswith('jpg'): continue
      jpg_list.append(path.join(name, fname))
    
    if not jpg_list: continue
    base = mkdir(dirname)
    pdf = convert(jpg_list)
    print(name + '.pdf')
    with open( path.join(base, name + '.pdf'), 'wb') as f:
      f.write(pdf)
