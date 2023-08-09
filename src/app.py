from flask import Flask,request
from tensorflow.keras.models import load_model
import numpy as np
import json
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

model = load_model('../Model/model.h5')



'''
age         float64
sex         float64
cp          float64
trestbps    float64
chol        float64
fbs         float64
restecg     float64
thalach     float64
exang       float64
oldpeak     float64
slope       float64
ca          float64
thal        float64
'''

@app.post('/')

def index():
    try:
        print(request.data,type(request.data))
        json_data = json.loads(request.data.decode('utf-8'))
        print(json_data,type(json_data))
        age = float(json_data["age"])
        sex  = float(json_data['sex'])
        cp   = float(json_data['cp'])
        trestbps  = float(json_data['trestbps'])
        chol   = float(json_data['chol'])
        fbs    = float(json_data['fbs'])
        restecg   = float(json_data['restecg'])
        thalach  = float(json_data['thalach'])
        exang   = float(json_data['exang'])
        oldpeak  = float(json_data['oldpeak'])
        slope   = float(json_data['slope'])
        ca   = float(json_data['ca'])
        thal    = float(json_data['thal'])
        data = [[age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]]
        Prediction = np.argmax(model.predict(data), axis=1)
        print("Prediction:",Prediction[0])
        return {"Prediction":str(Prediction[0])}
    except Exception as e:
        print("Error:",e)
        return {"Error":"Error"}

app.run(debug=True)
