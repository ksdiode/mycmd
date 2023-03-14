import os
from os import path

def make_chapter(argv):
  dir_path = os.getcwd()
  fname = path.join(dir_path, '목차.txt')
  with open(fname, "rt", encoding="utf-8") as f:
    chapters = f.readlines()
    for chapter in chapters:
      chapter = chapter.strip()
      print(chapter)
      os.mkdir(chapter)

