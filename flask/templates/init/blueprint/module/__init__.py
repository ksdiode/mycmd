from flask import Blueprint, render_template, request , jsonify, abort

router = Blueprint('${module}',__name__,  
                  url_prefix='${module}', template_folder='templates')


# app.py 파트
# import ${module}
# app.register_blueprint(${module}.router)

@router.route('/')
def ${module}_index():
  return render_template('${module}.html')
