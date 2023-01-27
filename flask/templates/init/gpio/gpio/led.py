from flask import Blueprint, render_template, request , jsonify, abort
from . import GPIO

# 장치 초기화
leds = [17, 18, 19]  # RED, GREEN, BLUE
# pwms = [ GPIO.PWM(led, 500) for led in leds]
# for pwm in pwms :
#   pwm.start(100)

router = Blueprint('miniter',__name__, 
              url_prefix='/gpio/led', template_folder='templates')

@router.route('/', methods=['GET'])
def led():
  return render_template('led3.html')

@router.route('/', methods=['PUT'])
def led_put():
  data = request.get_json()
  print(data)

  return jsonify(data)
