import os
from os import path
from PIL import Image
from img2pdf import convert

def check_dir():
  dir = path.join(path.abspath(os.curdir), 'split')
  if not path.exists(dir): os.makedirs(dir)


def merge(argv):
  pass

def make_magazine(argv):
  mname = path.abspath(os.curdir).split('\\')[-2]
  bookname = path.abspath(os.curdir).split('\\')[-1]
  check_dir()

  jpg_list = []

  files = os.listdir(os.curdir)
  for ix, file in enumerate(files, 1):
    print(f'{ix:03}/{len(files)}')
    
    if path.isdir(file): continue
    if not file.endswith('.jpg'): continue

    image = Image.open(file)
    w, h = image.size
    w = int(w/2)
    
    l_box = (0, 0, w-1, h)
    r_box = (w, 0, w*2-1, h)
    l_image = image.crop(l_box)
    r_image = image.crop(r_box)

    # if ix != 1:
    #   l_image.save(f'split/{ix:03}-l.jpg', quality=98)
    #   jpg_list.append(f'split/{ix:03}-l.jpg')

    l_image.save(f'split/{ix:03}-l.jpg', quality=98)
    jpg_list.append(f'split/{ix:03}-l.jpg')

    r_image.save(f'split/{ix:03}-r.jpg', quality=98)
    jpg_list.append(f'split/{ix:03}-r.jpg')
    
  pdf = convert(jpg_list)
  fname = f'../{mname}-{bookname}.pdf'
  with open( fname, 'wb') as f:
    f.write(pdf)

  print('완성')
