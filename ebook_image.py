import os
from PIL import Image

def find_max_height(dir_path, files):
  heights = []
  max_height = 0
  max_file = ''
  for file in files:
    fpath = os.path.join(dir_path, file)
    image = Image.open(fpath)  # .convert('jpg')
    f = 1800/image.size[0]
    h = int(image.size[1] * f)
    if max_height < h :
      max_height = h
      max_file = file
    heights.append(h)
  # return  max(heights)
  return max_height, max_file

def convert(dir_path, files):
  # dir_path.split('\\')[-1]
  target = 'convert-image'
  target_path = os.path.join(dir_path, target)
  if not os.path.exists(target_path):
    os.mkdir(target_path)


  for file in files:
    fpath = os.path.join(dir_path, file)
    image = Image.open(fpath)  # .convert('jpg')

    f = 1800/image.size[0]
    h = int(image.size[1] * f)
    try: 
      bg = Image.new('RGB', (1800, height), (255, 255, 255))
      newimage = image.resize((1800, h)) # .crop((0,0, 1800, h-200))
      bg.paste(newimage, (0,0))
      fpath = os.path.join(target_path, '_' + file)
      bg.save(fpath, quality=95)
      print(file)
    except Exception as e:
      print(e)


dir_path = os.getcwd()
# dir_path = 'C:/Users/a/Desktop/2022 IoT 2/이미지/새 폴더/OpenCV-Python으로 배우는 영상 처리 및 응용/output'

files = os.listdir(dir_path)
files = list(filter(lambda f: f.endswith('.jpg'), files))




height, fname = find_max_height(dir_path, files)
# print(height, fname)
# height = 2900
convert(dir_path, files)


