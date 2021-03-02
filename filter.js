$(function(){
    var $cats = $('a').click(function(){
        if (this.id == "all"){
            $('#Container > div').show();
        } else{
            var $fil = $('.' + this.id).show();
            $('#Container > div').not($fil).hide();
        }
    })

});
