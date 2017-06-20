function http(axios,type,url,data){
        return new Promise(function(resolve,reject){
            try{
               axios({
                    method: type,
                    url: url,
                    data:data
                }).then(function(response){
                        if(response) {

                            return resolve(response);
                        }
                    }, function(){
                       return reject('请求错误');
                    }
                );
            }
            catch(e){
                return reject('请求超时')

            }
        })
}
