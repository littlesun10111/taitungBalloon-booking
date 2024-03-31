$(window).resize(function(){  
    var width = $(this).width();  
    const tableRWD = $('.fragment__time .table');
    if(width < 320){
        tableRWD.addClass('table-responsive');
        console.log('class added!')
    }else {
        tableRWD.removeClass('table-responsive');
    }
}); 

window.onload=function(){
    const info = document.getElementById('taitung_info');
    const reserve = document.getElementById('taitung_reserve');
    const check = document.getElementById('taitung_check');
    const service = document.getElementById('taitung_service');

    const infoTitle = document.querySelector('.title__info');
    const infoInstr = document.querySelector('.fragment__instr');
    const infoTime = document.querySelector('.fragment__time');
    const product = document.getElementsByClassName('pro-item');
    const productWrap = document.querySelector('.pro-group');
    const stepChart = document.getElementsByClassName('step-item');
    const stepWrap = document.querySelector('.step-group');
    const procedure = document.getElementsByClassName('procedure-wrap');
    const procedureWrap = document.querySelector('.procedure-group');
    const ticketTable = document.querySelector('.o-style-table')

    const balloonLeft = document.querySelector('.decoration .left');
    const balloonRight = document.querySelector('.decoration .right');
    
    function makeBalloon() {
        let content = '';
        for (let i = 0; i < 5; i++){
            content += `<div class="balloon-s-${i+1}"></div>`
        }
        balloonLeft.innerHTML = content;
        balloonRight.innerHTML = content;
    } 



    function hidden(el){
        if(HTMLCollection.prototype.isPrototypeOf(el)){
            Array.from(el).forEach(item => {
                item.classList.add('prepare');
            });
        }else{
            el.classList.add('prepare');
        }
    }
    function visiable(el){
        if(HTMLCollection.prototype.isPrototypeOf(el)){
            Array.from(el).forEach(item => {
                item.classList.remove('prepare');
            });
        }else{
            el.classList.remove('prepare');
        }
        
    }
    function showProduct(el){
        visiable(el);
        if(HTMLCollection.prototype.isPrototypeOf(el)){
            Array.from(el).forEach(item => {
                item.classList.add('fadeInUp');
            });
        }else{
            el.classList.add('fadeInUp');
        }
        
    }

    const greetingAnimate = ()=>{
        hidden(infoTitle);
        hidden(infoInstr);
        hidden(infoTime);
        setTimeout(() => {
            showProduct(infoTitle);
            showProduct(infoInstr);
            showProduct(infoTime);
        }, 500);
    };

    function getPosition(el) {
        var xPos = 0;
        var yPos = 0;
       
        while (el) {
          if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;
       
            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
          } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
          }
       
          el = el.offsetParent;
        }
        // alert(`X coordinates: ${xPos}, Y coordinates: ${yPos}`);
        return {
          x: xPos,
          y: yPos
        };
      };

    function AddAnimation(el,wrap){
        let posY;

        if(!wrap){
            posY = getPosition(el).y;
        }else{
            posY = getPosition(wrap).y;
        }

        document.documentElement.addEventListener('touchstart', function(event) {
            var coordinate = {
            clientY: event.touches.clientY,
            pageY: event.touches.pageY,
            };

            if((posY - coordinate.pageY) < 120 || coordinate.pageY > posY){
                showProduct(el)
                    // console.log('class added')
                } else {
                    // console.error(`${coordinate.pageY},${posY}`)
            }
        });

        document.documentElement.addEventListener('touchmove', function(event) {
            var coordinate = {
            clientY: event.touches.clientY,
            pageY: event.touches.pageY,
            };

            if((posY - coordinate.pageY) < 120 || coordinate.pageY > posY){
                showProduct(el)
                    // console.log('class added')
                } else {
                    // console.error(`${coordinate.pageY},${posY}`)
            }
        });

        document.documentElement.addEventListener('mouseenter', function(event) {
            var coordinate = {
            clientY: event.clientY,
            pageY: event.pageY,
            };

            if((posY - coordinate.pageY) < 120 || coordinate.pageY > posY){
                showProduct(el)
                    // console.log('class added')
                } else {
                    // console.error(`${coordinate.pageY},${posY}`)
            }
        });

        document.documentElement.addEventListener('mousemove', function(event) {
            var coordinate = {
            clientY: event.clientY,
            pageY: event.pageY,
            };

            if((posY - coordinate.pageY) < 120 || coordinate.pageY > posY){
                showProduct(el)
                    // console.log('class added')
                } else {
                    // console.error(`${coordinate.pageY},${posY}`)
            }
        });

    };

    // greetingAnimate();
    hidden(product);
    hidden(stepChart);
    hidden(procedure);
    hidden(ticketTable);
    makeBalloon()

    window.addEventListener('keydown',e=>{
        if(e.key === 'Down' || e.key === 'ArrowDown' || e.key === 'Up' || e.key === 'ArrowUp'){
            visiable(product);
            visiable(stepChart);
            visiable(procedure);
            visiable(ticketTable);
        }
      })

    window.addEventListener("wheel", event => {
        // console.info(event.deltaY);
        AddAnimation(product,productWrap);
        AddAnimation(stepChart,stepWrap);    
        AddAnimation(procedure,procedureWrap);    
        AddAnimation(ticketTable);
    });

    AddAnimation(product,productWrap);
    AddAnimation(stepChart,stepWrap);    
    AddAnimation(procedure,procedureWrap);    
    AddAnimation(ticketTable);
}


