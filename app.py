 
from flask import Flask, render_template, url_for, redirect
import functions



############################
### Initialize flask app ###
############################
app = Flask(__name__)


##############
### ROUTES ###
##############
#-----------------------------------------------------------------
@app.route('/')
def go_home():
    return redirect('/index')
#-----------------------------------------------------------------
@app.route('/index')
def index():
    cbsa_string, data_string, emergent_string = functions.get_map_data()
    return render_template('index.html', title="Metro Area Projection Model", cbsa=cbsa_string, data=data_string, emergent=emergent_string)
#-----------------------------------------------------------------
@app.route('/table')
def table():
    html_table = functions.get_table_data()
    return render_template('table.html', title="MSA Table", table=html_table)
#-----------------------------------------------------------------


# app import check
if __name__ == '__main__':
    app.run()              
