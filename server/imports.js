// Server // Middlewares
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Banco de dados
import { Sequelize, DataTypes } from 'sequelize';

// Caminhos dos arquivos
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';

// Carregamento in live
import livereload from 'livereload';
import connectLivereload from 'connect-livereload';

// Date and Hours
import moment from 'moment';


// Construtores de HTML
import * as cheerio from 'cheerio';
import {applyMaskToHTML} from '../public/extends_project/applyMask.js';

// CSS utilitários para o projeto (USO DE WH-) 
import chokidar from 'chokidar'; 


// Menu
import {forms} from '../public/forms/forms_system.js'


export default {
  express,
  cors,
  bodyParser,

  Sequelize,
  DataTypes,

  fileURLToPath,
  path,
  fs,

  livereload,
  connectLivereload,
 
  moment,
 
  cheerio,
  applyMaskToHTML,

  chokidar,

  forms,





  
};


// Acesso de funções globalmente
globalThis.path = path;
globalThis.fs = fs;

globalThis.cheerio = cheerio;
globalThis.applyMaskToHTML = applyMaskToHTML;


globalThis.chokidar = chokidar;
