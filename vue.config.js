module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
	configureWebpack: {

         devServer: {

             host: '0.0.0.0',

             port: '8080',
			 disableHostCheck: true
         }

    }
}
