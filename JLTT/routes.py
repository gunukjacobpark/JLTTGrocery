import os
from flask import Flask, render_template, url_for, redirect, request, flash
from JLTT import app


@app.route('/')
@app.route('/home')
def home():
	return render_template('home.html')

@app.route('/shop')
def shop():
	return render_template('shop.html')

@app.route("", methods=['GET', 'POST'])
def login():
	#user authentication 
	return render_template()

@app.route("", methods=['GET', 'POST'])
def logout():
	return render_template()