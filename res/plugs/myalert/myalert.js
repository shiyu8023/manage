;~function(window,document){
    var obj = {
        detailBox:function(data){
            var str =
                '<div class="agreement_main alert_content">' +
                ' <div class=agreement_content> ' +
                '<span class=close_alert></span> ' +
                '<p class=agreement_title>免费办理一年期宽带电视业务协议</p>' +
                '<div class=agreement_text> ' +
                '<ul class="agreement_list agreement_detail">' +
                '</ul>'+
                '</div>' +
                ' </div> ' +
                '</div>';
            var part = document.getElementById('alert_part');
                part.innerHTML = str;
                part.setAttribute('class','alert_agreement');
            document.getElementById('app').style.overflow='hidden';
            document.getElementsByClassName('close_alert')[0].onclick=this.closeAgreement;
            this.fillData(data.msg)

        },
        promptBox:function(data){
            var str =
                '<div class="prompt_main alert_content">' +
                '<span class=close_alert></span> ' +
                '<div class=prompt_text>' +
                '<p class="prompt_title">'+data.title+'</p>'+
                '<p>'+data.msg+'</p>'+
                 '<div><button class="prompt_btn">'+data.btnText+'</button></div>'   +
                '</div>' +
                '</div>';
            var part = document.getElementById('alert_part');
            part.innerHTML = str;
            part.setAttribute('class','alert_agreement');
            document.getElementsByClassName('close_alert')[0].onclick=this.closeAgreement;
            document.getElementsByClassName('prompt_btn')[0].onclick=this.closeAgreement;

        },
        alertShare:function(){
            var str = "<div class=tip></div>";
            var part = document.getElementById('alert_part');
            part.innerHTML = str;
            part.setAttribute('class','alert_agreement');
            part.onclick=this.closeAgreement;

        },
        closeAgreement:function(){
            var part = document.getElementById('alert_part');
            part.innerHTML = '';
            part.removeAttribute('class','alert_agreement');
            document.getElementById('app').style.overflow='auto'

        },
        fillData:function(data){
            var strFill = '';
            for(var k in data){
                var length = data[k].content.length;
                if(length<2){
                    strFill+= '<li>【'+data[k].title+'】<br>'+data[k].content+'</li>';
                }else{
                    strFill+= '<li>【'+data[k].title+'】<ul>';
                    for (var i=0;i<length;i++){
                        strFill+='<li>'+data[k].content[i]+'</li>';
                    }
                    strFill+='</ul></li>';
                }
            }
            document.getElementsByClassName('agreement_detail')[0].innerHTML = strFill
        }
    };
    function Myplus(data){
        this.data = data;
    }
    Myplus.prototype.alertType=function(){
        var data = this.data;
        var type = data.type;
        switch(type){
            case '1':
                obj.detailBox(data);
                break;
            case '2':
                obj.promptBox(data);
                break;
            case '3':
                obj.alertShare(data);
                break;
        }
    };
    function sweet(data){
        var myAlert = new Myplus(data);
        myAlert.alertType();
    }
    window.sweet = sweet;
}(window,document);
