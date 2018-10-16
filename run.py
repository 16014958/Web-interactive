from flask import Flask, render_template, jsonify, request
import sqlite3

app = Flask(__name__)

WEATHERDB = 'weatherData'


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')



@app.route('/home', methods=['GET'])
def home():
    return render_template('home.html')






@app.route('/Temp', methods=['GET'])
def Temp_list():
    con = sqlite3.connect(WEATHERDB)
    Temp = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        Temp.append(list(row))
    con.close()
    return jsonify(Temp)



@app.route('/TempJanuary', methods=['GET'])
def TempJanuary_list():
    con = sqlite3.connect(WEATHERDB)
    TempJanuary = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempJanuary.append(list(row))
    con.close()
    return jsonify(TempJanuary)



@app.route('/TempFebruary', methods=['GET'])
def TempFebruary_list():
    con = sqlite3.connect(WEATHERDB)
    TempFebruary = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempFebruary.append(list(row))
    con.close()
    return jsonify(TempFebruary)



@app.route('/TempMarch', methods=['GET'])
def TempMarch_list():
    con = sqlite3.connect(WEATHERDB)
    TempMarch = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempMarch.append(list(row))
    con.close()
    return jsonify(TempMarch)




@app.route('/TempApril', methods=['GET'])
def TempApril_list():
    con = sqlite3.connect(WEATHERDB)
    TempApril = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempApril.append(list(row))
    con.close()
    return jsonify(TempApril)


@app.route('/TempMay', methods=['GET'])
def TempMay_list():
    con = sqlite3.connect(WEATHERDB)
    TempMay = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempMay.append(list(row))
    con.close()
    return jsonify(TempMay)




@app.route('/TempJune', methods=['GET'])
def TempJune_list():
    con = sqlite3.connect(WEATHERDB)
    TempJune = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempJune.append(list(row))
    con.close()
    return jsonify(TempJune)



@app.route('/TempJuly', methods=['GET'])
def TempJuly_list():
    con = sqlite3.connect(WEATHERDB)
    TempJuly = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempJuly.append(list(row))
    con.close()
    return jsonify(TempJuly)




@app.route('/TempAugust', methods=['GET'])
def TempAugust_list():
    con = sqlite3.connect(WEATHERDB)
    TempAugust = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempAugust.append(list(row))
    con.close()
    return jsonify(TempAugust)




@app.route('/TempSeptember', methods=['GET'])
def TempSeptember_list():
    con = sqlite3.connect(WEATHERDB)
    TempSeptember = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempSeptember.append(list(row))
    con.close()
    return jsonify(TempSeptember)



@app.route('/TempOctober', methods=['GET'])
def TempOctober_list():
    con = sqlite3.connect(WEATHERDB)
    TempOctober = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempOctober.append(list(row))
    con.close()
    return jsonify(TempOctober)


@app.route('/TempNovember', methods=['GET'])
def TempNovember_list():
    con = sqlite3.connect(WEATHERDB)
    TempNovember = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempNovember.append(list(row))
    con.close()
    return jsonify(TempNovember)


@app.route('/TempDecember', methods=['GET'])
def TempDecember_list():
    con = sqlite3.connect(WEATHERDB)
    TempDecember = []
    cur = con.execute('SELECT * FROM TemperatureTwo')

    for row in cur:
        TempDecember.append(list(row))
    con.close()
    return jsonify(TempDecember)









@app.route('/Humidity', methods=['GET'])
def Humidity_list():
    con = sqlite3.connect(WEATHERDB)
    Humidity = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        Humidity.append(list(row))
    con.close()
    return jsonify(Humidity)




@app.route('/HumidityJanuary', methods=['GET'])
def HumidityJanuary_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityJanuary = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityJanuary.append(list(row))
    con.close()
    return jsonify(HumidityJanuary)



@app.route('/HumidityFebruary', methods=['GET'])
def HumidityFebruary_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityFebruary = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityFebruary.append(list(row))
    con.close()
    return jsonify(HumidityFebruary)



@app.route('/HumidityMarch', methods=['GET'])
def HumidityMarch_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityMarch = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityMarch.append(list(row))
    con.close()
    return jsonify(HumidityMarch)




@app.route('/HumidityApril', methods=['GET'])
def HumidityApril_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityApril = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityApril.append(list(row))
    con.close()
    return jsonify(HumidityApril)



@app.route('/HumidityMay', methods=['GET'])
def HumidityMay_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityMay = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityMay.append(list(row))
    con.close()
    return jsonify(HumidityMay)




@app.route('/HumidityJune', methods=['GET'])
def HumidityJune_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityJune = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityJune.append(list(row))
    con.close()
    return jsonify(HumidityJune)


@app.route('/HumidityJuly', methods=['GET'])
def HumidityJuly_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityJuly = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityJuly.append(list(row))
    con.close()
    return jsonify(HumidityJuly)




@app.route('/HumidityAugust', methods=['GET'])
def HumidityAugust_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityAugust = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityAugust.append(list(row))
    con.close()
    return jsonify(HumidityAugust)



@app.route('/HumiditySeptember', methods=['GET'])
def HumiditySeptember_list():
    con = sqlite3.connect(WEATHERDB)
    HumiditySeptember = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumiditySeptember.append(list(row))
    con.close()
    return jsonify(HumiditySeptember)





@app.route('/HumidityOctober', methods=['GET'])
def HumidityOctober_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityOctober = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityOctober.append(list(row))
    con.close()
    return jsonify(HumidityOctober)




@app.route('/HumidityNovember', methods=['GET'])
def HumidityNovember_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityNovember = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityNovember.append(list(row))
    con.close()
    return jsonify(HumidityNovember)



@app.route('/HumidityDecember', methods=['GET'])
def HumidityDecember_list():
    con = sqlite3.connect(WEATHERDB)
    HumidityDecember = []
    cur = con.execute('SELECT * FROM HumidityTwo')

    for row in cur:
        HumidityDecember.append(list(row))
    con.close()
    return jsonify(HumidityDecember)





@app.route('/Rainfall', methods=['GET'])
def Rainfall_list():
    con = sqlite3.connect(WEATHERDB)
    Rainfall = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        Rainfall.append(list(row))
    con.close()
    return jsonify(Rainfall)



@app.route('/Sunshine', methods=['GET'])
def sunshine_list():
    con = sqlite3.connect(WEATHERDB)
    sunshine = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshine.append(list(row))
    con.close()
    return jsonify(sunshine)


@app.route('/Nelson', methods=['GET'])
def sunshineNelson_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineNelson = []
    cur = con.execute('SELECT * FROM SunshineTwo WHERE Location ="Nelson"')

    for row in cur:
        sunshineNelson.append(list(row))
    con.close()
    return jsonify(sunshineNelson)






# Months Sunshine


@app.route('/Janruary', methods=['GET'])
def sunshineJanruary_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineJanruary = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineJanruary.append(list(row))
    con.close()
    return jsonify(sunshineJanruary)



@app.route('/February', methods=['GET'])
def sunshineFebruary_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineFebruary = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineFebruary.append(list(row))
    con.close()
    return jsonify(sunshineFebruary)



@app.route('/March', methods=['GET'])
def sunshineMarch_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineMarch = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineMarch.append(list(row))
    con.close()
    return jsonify(sunshineMarch)




@app.route('/April', methods=['GET'])
def sunshineApril_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineApril = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineApril.append(list(row))
    con.close()
    return jsonify(sunshineApril)




@app.route('/May', methods=['GET'])
def sunshineMay_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineMay = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineMay.append(list(row))
    con.close()
    return jsonify(sunshineMay)



@app.route('/June', methods=['GET'])
def sunshineJune_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineJune = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineJune.append(list(row))
    con.close()
    return jsonify(sunshineJune)



@app.route('/July', methods=['GET'])
def sunshineJuly_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineJuly = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineJuly.append(list(row))
    con.close()
    return jsonify(sunshineJuly)



@app.route('/August', methods=['GET'])
def sunshineAugust_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineAugust = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineAugust.append(list(row))
    con.close()
    return jsonify(sunshineAugust)



@app.route('/September', methods=['GET'])
def sunshineSeptember_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineSeptember = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineSeptember.append(list(row))
    con.close()
    return jsonify(sunshineSeptember)



@app.route('/October', methods=['GET'])
def sunshineOctober_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineOctober = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineOctober.append(list(row))
    con.close()
    return jsonify(sunshineOctober)



@app.route('/November', methods=['GET'])
def sunshineNovember_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineNovember = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineNovember.append(list(row))
    con.close()
    return jsonify(sunshineNovember)



@app.route('/December', methods=['GET'])
def sunshineDecember_list():
    con = sqlite3.connect(WEATHERDB)
    sunshineDecember = []
    cur = con.execute('SELECT * FROM SunshineTwo')

    for row in cur:
        sunshineDecember.append(list(row))
    con.close()
    return jsonify(sunshineDecember)














# Rainfall


@app.route('/RJ', methods=['GET'])
def RainfallJanruary_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallJanruary = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallJanruary.append(list(row))
    con.close()
    return jsonify(RainfallJanruary)



@app.route('/RF', methods=['GET'])
def RainfallFebruary_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallFebruary = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallFebruary.append(list(row))
    con.close()
    return jsonify(RainfallFebruary)



@app.route('/RM', methods=['GET'])
def RainfallMarch_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallMarch = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallMarch.append(list(row))
    con.close()
    return jsonify(RainfallMarch)




@app.route('/RA', methods=['GET'])
def RainfallApril_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallApril = []
    cur = con.execute('SELECT * FROM RainfallTwo ')

    for row in cur:
        RainfallApril.append(list(row))
    con.close()
    return jsonify(RainfallApril)




@app.route('/RMa', methods=['GET'])
def RainfallMay_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallMay = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallMay.append(list(row))
    con.close()
    return jsonify(RainfallMay)



@app.route('/RJUN', methods=['GET'])
def RainfallJune_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallJune = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallJune.append(list(row))
    con.close()
    return jsonify(RainfallJune)



@app.route('/RJUL', methods=['GET'])
def RainfallJuly_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallJuly = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallJuly.append(list(row))
    con.close()
    return jsonify(RainfallJuly)



@app.route('/RAUG', methods=['GET'])
def RainfallAugust_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallAugust = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallAugust.append(list(row))
    con.close()
    return jsonify(RainfallAugust)



@app.route('/RS', methods=['GET'])
def RainfallSeptember_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallSeptember = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallSeptember.append(list(row))
    con.close()
    return jsonify(RainfallSeptember)



@app.route('/RO', methods=['GET'])
def RainfallOctober_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallOctober = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallOctober.append(list(row))
    con.close()
    return jsonify(RainfallOctober)



@app.route('/RN', methods=['GET'])
def RainfallNovember_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallNovember = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallNovember.append(list(row))
    con.close()
    return jsonify(RainfallNovember)



@app.route('/RD', methods=['GET'])
def RainfallDecember_list():
    con = sqlite3.connect(WEATHERDB)
    RainfallDecember = []
    cur = con.execute('SELECT * FROM RainfallTwo')

    for row in cur:
        RainfallDecember.append(list(row))
    con.close()
    return jsonify(RainfallDecember)
