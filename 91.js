/**
 *
 * @date    2015-04-25 13:17:20
 * @update  2015-04-25 16:26:53
 * @version 1.2
 * javascript:void(function(u,s)%7Bs%3Ddocument.body.appendChild(document.createElement(%27script%27))%3Bs.src%3Du%2B%27%3Fts%3D%27%2BDate.now()%3Bs.charset%3D%27UTF-8%27%7D(%27http://fulicdn.qiniudn.com/91p.js%27))
 * javascript:void(function(u,s)%7Bs%3Ddocument.body.appendChild(document.createElement(%27script%27))%3Bs.src%3Du%2B%27%3Fts%3D%27%2BDate.now()%3Bs.charset%3D%27UTF-8%27%7D(%27https://rawgit.com/zkzipoo/myCodes/master/91.js%27))
 */

(function(){
if(typeof(so)!='undefined'){
    var db = [];
    var html = [];
    html.push('<div id="91box">');
    html.push('<style type="text/css">');
    html.push('.list91{background-color:rgba(255,255,255,0.12);border:2px #dd4b39 solid;border-radius:10px;padding:10px;font-size:14px;}');
    html.push('.list91>dt{padding:10px 0 0 0;font-size:16px;}');
    html.push('.list91>dd{display:block;margin-top:-25px;padding:10px 0 20px 20px;}');
    html.push('</style>');
    html.push('<dl id="91list" class="list91" style="">');
    html.push('<dt>\u6807\u6E05</dt>');
    html.push('<dd id="91list-bd">\u6B63\u5728\u89E3\u6790...</dd>');
    html.push('<dt>\u9AD8\u6E05</dt>');
    html.push('<dd id="91list-hd">\u6B63\u5728\u89E3\u6790...</dd>');
    html.push('</dl>');
    html.push('</div>');
    if($('#91box').size())$('#91box').remove();
    $('#mediaspace').append(html.join(''));
    function parseData(data){
        if(data){
            data = trim(data);
            data = decodeURIComponent(data);
            db.push(data);
            return data;
        };
        return false;
    };
    function trim(s){
        s = (s.indexOf('&')>-1) ? s.split('&')[0] : s;
        s = s.replace('file=', '');
        return s;
    };
    function parse(d){
        d = d || 3;
        var title = $('#viewvideo-title').text();
        if(d==3 || d==1){
            $.get('getfile.php?VID=' +so.getVariable('file') +'&mp4=0&seccode=' +so.getVariable('seccode') +'&max_vid='+so.getVariable('max_vid'), function(data){
                console.log(data);
                data = parseData(data);
                html = [];
                if(data){
                    html.push('<a target="_blank" class="91link-play" href="'+ data +'">\u64AD\u653E</a>&nbsp;&nbsp;&nbsp;');
                    html.push('<a target="_blank" class="91link-download" download="'+ title +'" href="'+ data +'">\u4E0B\u8F7D</a>');
                }else{
                    html.push('<a href="javascript:void(0)" class="91link-try">\u6807\u6E05\u89E3\u6790\u5931\u8D25\uFF0C\u91CD\u8BD5\uFF1F</a>')
                };
                var $bd = $('#91list-bd').html(html.join(''));
                $bd.find('.91link-try').on('click', function(){
                    parse(1);
                    $bd.html('\u6B63\u5728\u89E3\u6790...');
                    return false;
                });
            });
        };
        if(d==3 || d==2){
            $.get('getfile.php?VID=' +so.getVariable('file') +'&mp4=1&seccode=' +so.getVariable('seccode') +'&max_vid='+so.getVariable('max_vid'), function(data){
                console.log(data);
                data = parseData(data);
                html = [];
                if(data){
                    html.push('<a target="_blank" class="91link-play" href="'+ data +'">\u64AD\u653E</a>&nbsp;&nbsp;&nbsp;');
                    html.push('<a target="_blank" class="91link-download" download="'+ title +'" href="'+ data +'">\u4E0B\u8F7D</a>');
                }else{
                    html.push('<a href="javascript:void(0)" class="91link-try">\u9AD8\u6E05\u89E3\u6790\u5931\u8D25\uFF0C\u91CD\u8BD5\uFF1F</a>')
                };
                var $hd = $('#91list-hd').html(html.join(''));
                $hd.find('.91link-try').on('click', function(){
                    parse(2);
                    $hd.html('\u6B63\u5728\u89E3\u6790...');
                    return false;
                });
            });
        };
    };
    parse();
}else{
    console.log('\u627E\u4E0D\u5230\u64AD\u653E\u5668\u5BF9\u8C61');
};
$('iframe').remove();
})();
