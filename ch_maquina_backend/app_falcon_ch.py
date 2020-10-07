import falcon 
from falcon_multipart.middleware import MultipartMiddleware
import script_chmaquina
import os
from falcon_cors import CORS
import json

cors = CORS(allow_origins_list=['*'],allow_all_origins=True)
class chMaquina:

	_storage_path = './uploaded_files'

	def on_post(self, req, resp):
		#Retrive input_file
		input_file_ = req.get_param('file')
		#print('inp',input_file_)
		#Test if the file was uploaded
		if input_file_.filename:
			filename = input_file_.filename
			#Define file_path 
			file_path = os.path.join(self._storage_path,filename)
			open(file_path, 'wb').write(input_file_.file.read())
			resp.body = json.dumps(script_chmaquina.open_file_ch(file_path))
			#print(file_path)
			#{"content": "linealinealinea"}

api = falcon.API(middleware = [MultipartMiddleware(), cors.middleware])
api.add_route('/ch_Maquina',chMaquina())