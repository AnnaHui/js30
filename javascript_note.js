// Array.prototype.indexOf();
// Array.slice(start,[end]);//尋找start ~ end, create a new array
// String.toLowerCase(); //小寫
// String.toUpperCase(); //大寫
// String.replace(origin, new);


var list = document.querySelector('.output ul');
list.innerHTML = '';

var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
    var input = stations[i];
    var threeItem = input.slice(0,3);
    
    var nameItem = input.slice(input.indexOf(';')+1);

    var result = threeItem + ':' + nameItem;

    var listLi = document.createElement('li');
    listLi.textContent = result;
    list.appendChild(listLi)
    
}

