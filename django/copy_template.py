import os
from glob import glob
from os import path

template_path = path.join(path.dirname(__file__), 'app')

def copy_file(src, dest, word_map):
  src_f = open(src, 'r', encoding='utf-8')
  dest_f= open(dest, 'w', encoding='utf-8')

  content = src_f.read()
  for k, v in word_map.items():
    org = f'${{{k}}}'
    content = content.replace(org, v)
  
  # re.sub(pattern, content, )

  dest_f.write(content)
  src_f.close()
  dest_f.close()

def copy_template(template_path, dest, word_map):
  src = glob(template_path + '/**', recursive=True)
  src.sort()

  target_dir =''
  for f in src:
    if path.isdir(f):
      target_dir = path.join(dest, f.replace(template_path + '\\', ''))
      if path.exists(target_dir): continue
      os.makedirs(target_dir)
    else:
      target_file = path.join(dest, f.replace(template_path + '\\', ''))
      print(target_file)
      copy_file(f, target_file, word_map)

def get_info(app):
  Model = input('모델명:')
  model = Model.lower()
  return {
    'app': app,
    'Model': Model,
    'model': model
  }

