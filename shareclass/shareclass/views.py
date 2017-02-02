# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template.loader import get_template
from django import template


def home(request):
	return render_to_response('index_v7.html')

	

