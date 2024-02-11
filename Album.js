const width_previous = document.querySelector('#width-previous');
const width_next = document.querySelector('#width-next');
const previousBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const album = document.querySelector('#album');
const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
const page4 = document.querySelector('#page4');
const page5 = document.querySelector('#page5');
const page6 = document.querySelector('#page6');
const page7 = document.querySelector('#page7');
const page8 = document.querySelector('#page8');
const page9= document.querySelector('#page9');
const last = document.querySelector('#last');

width_previous.addEventListener('click', previousPage);
width_next.addEventListener('click', nextPage);

previousBtn.addEventListener('click', previousPage);
nextBtn.addEventListener('click', nextPage);

let currentPage = 1;
let totalPages = 10;
let maxPage = totalPages + 1;

function open(){
    album.style.transform = "translateX(50%)";
    previousBtn.style.transform = "translateX(-200px)";
    nextBtn.style.transform = "translateX(200px)";
}
function close(Starting){
    if(Starting){
        album.style.transform = "translateX(0%)";
    } 
    else{
        album.style.transform = "translateX(100%)";
    }
    previousBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function nextPage(){
    if(currentPage < maxPage){
        switch(currentPage){
            case 1:
                open();
                page1.classList.add('flip');
                page1.style.zIndex = window.getComputedStyle(page2).zIndex + 1;
                break;

            case 2:
                page2.classList.add('flip');
                page2.style.zIndex = window.getComputedStyle(page3).zIndex + 1;
                page1.style.zIndex = window.getComputedStyle(page2).zIndex - 1;
                break;
                
            case 3:
                page3.classList.add('flip');
                page3.style.zIndex = window.getComputedStyle(page4).zIndex + 1;
                page2.style.zIndex = window.getComputedStyle(page3).zIndex - 1;
                page1.style.zIndex = window.getComputedStyle(page2).zIndex - 1;
                break;
            
            case 4:
                page4.classList.add('flip');
                page4.style.zIndex = window.getComputedStyle(page5).zIndex + 1;
                page3.style.zIndex = window.getComputedStyle(page4).zIndex - 1;
                page2.style.zIndex = window.getComputedStyle(page3).zIndex - 1;
                page1.style.zIndex = window.getComputedStyle(page2).zIndex - 1;
                break;
                
            case 5:
                page5.classList.add('flip');
                page5.style.zIndex = window.getComputedStyle(page6).zIndex + 1;
                page4.style.zIndex = window.getComputedStyle(page5).zIndex - 1;
                page3.style.zIndex = window.getComputedStyle(page4).zIndex - 1;
                page2.style.zIndex = window.getComputedStyle(page3).zIndex - 1;
                page1.style.zIndex = window.getComputedStyle(page2).zIndex - 1;
                break;

            case 6:
                page6.classList.add('flip');
                page6.style.zIndex = window.getComputedStyle(page7).zIndex + 1;
                page5.style.zIndex = window.getComputedStyle(page6).zIndex - 1;
                page4.style.zIndex = window.getComputedStyle(page5).zIndex - 1;
                page3.style.zIndex = window.getComputedStyle(page4).zIndex - 1;
                page2.style.zIndex = window.getComputedStyle(page3).zIndex - 1;
                page1.style.zIndex = window.getComputedStyle(page2).zIndex - 1;
                break;
            
            case 7:
                page7.classList.add('flip');
                page7.style.zIndex = window.getComputedStyle(page8).zIndex + 1;
                page6.style.zIndex = window.getComputedStyle(page7).zIndex - 1;
                page5.style.zIndex = window.getComputedStyle(page6).zIndex - 1;
                page4.style.zIndex = window.getComputedStyle(page5).zIndex - 1;
                page3.style.zIndex = window.getComputedStyle(page4).zIndex - 1;
                page2.style.zIndex = window.getComputedStyle(page3).zIndex - 1;
                page1.style.zIndex = window.getComputedStyle(page2).zIndex - 1;
                break;
            
            case 8:
                page8.classList.add('flip');
                page8.style.zIndex = window.getComputedStyle(page9).zIndex + 1;
                page7.style.zIndex = window.getComputedStyle(page8).zIndex - 1;
                page6.style.zIndex = window.getComputedStyle(page7).zIndex - 1;
                page5.style.zIndex = window.getComputedStyle(page6).zIndex - 1;
                page4.style.zIndex = window.getComputedStyle(page5).zIndex - 1;
                page3.style.zIndex = window.getComputedStyle(page4).zIndex - 1;
                page2.style.zIndex = window.getComputedStyle(page3).zIndex - 1;
                page1.style.zIndex = window.getComputedStyle(page2).zIndex - 1;
                break;
            
            case 9:
                page9.classList.add('flip');
                page9.style.zIndex = window.getComputedStyle(last).zIndex + 1;
                page8.style.zIndex = window.getComputedStyle(page9).zIndex - 1;
                page7.style.zIndex = window.getComputedStyle(page8).zIndex - 1;
                page6.style.zIndex = window.getComputedStyle(page7).zIndex - 1;
                page5.style.zIndex = window.getComputedStyle(page6).zIndex - 1;
                page4.style.zIndex = window.getComputedStyle(page5).zIndex - 1;
                page3.style.zIndex = window.getComputedStyle(page4).zIndex - 1;
                page2.style.zIndex = window.getComputedStyle(page3).zIndex - 1;
                page1.style.zIndex = window.getComputedStyle(page2).zIndex - 1;
                break;
            
            case 10:
                close(false);
                last.classList.add('flip');
                last.style.zIndex = window.getComputedStyle(page8).zIndex + 1;
                break;

            default:
                throw new Error('Unknown');
        }
        currentPage++;
    }
}
function previousPage(){
    if(currentPage > 1){
        switch(currentPage){
            case 2:
                close(true);
                page1.classList.remove('flip');
                page1.style.zIndex = window.getComputedStyle(page2).zIndex + 1;
                page2.style.zIndex = window.getComputedStyle(page1).zIndex - 1;
                page3.style.zIndex = window.getComputedStyle(page2).zIndex - 1;
                page4.style.zIndex = window.getComputedStyle(page3).zIndex - 1;
                page5.style.zIndex = window.getComputedStyle(page4).zIndex - 1;
                page6.style.zIndex = window.getComputedStyle(page5).zIndex - 1;
                page7.style.zIndex = window.getComputedStyle(page6).zIndex - 1;
                page8.style.zIndex = window.getComputedStyle(page7).zIndex - 1;
                page9.style.zIndex = window.getComputedStyle(page8).zIndex - 1;
                last.style.zIndex = window.getComputedStyle(page9).zIndex - 1;
                break;

            case 3:
                page2.classList.remove('flip');
                page2.style.zIndex = window.getComputedStyle(page1).zIndex + 1;
                page3.style.zIndex = window.getComputedStyle(page2).zIndex - 1;
                page4.style.zIndex = window.getComputedStyle(page3).zIndex - 1;
                page5.style.zIndex = window.getComputedStyle(page4).zIndex - 1;
                page6.style.zIndex = window.getComputedStyle(page5).zIndex - 1;
                page7.style.zIndex = window.getComputedStyle(page6).zIndex - 1;
                page8.style.zIndex = window.getComputedStyle(page7).zIndex - 1;
                page9.style.zIndex = window.getComputedStyle(page8).zIndex - 1;
                last.style.zIndex = window.getComputedStyle(page9).zIndex - 1;
                break;
                
            case 4:
                page3.classList.remove('flip');
                page3.style.zIndex = window.getComputedStyle(page2).zIndex + 1;
                page4.style.zIndex = window.getComputedStyle(page3).zIndex - 1;
                page5.style.zIndex = window.getComputedStyle(page4).zIndex - 1;
                page6.style.zIndex = window.getComputedStyle(page5).zIndex - 1;
                page7.style.zIndex = window.getComputedStyle(page6).zIndex - 1;
                page8.style.zIndex = window.getComputedStyle(page7).zIndex - 1;
                page9.style.zIndex = window.getComputedStyle(page8).zIndex - 1;
                last.style.zIndex = window.getComputedStyle(page9).zIndex - 1;
                break;
                
            case 5:
                page4.classList.remove('flip');
                page4.style.zIndex = window.getComputedStyle(page3).zIndex + 1;
                page5.style.zIndex = window.getComputedStyle(page4).zIndex - 1;
                page6.style.zIndex = window.getComputedStyle(page5).zIndex - 1;
                page7.style.zIndex = window.getComputedStyle(page6).zIndex - 1;
                page8.style.zIndex = window.getComputedStyle(page7).zIndex - 1;
                page9.style.zIndex = window.getComputedStyle(page8).zIndex - 1;
                last.style.zIndex = window.getComputedStyle(page9).zIndex - 1;
                break;
            
            case 6:
                page5.classList.remove('flip');
                page5.style.zIndex = window.getComputedStyle(page4).zIndex + 1;
                page6.style.zIndex = window.getComputedStyle(page5).zIndex - 1;
                page7.style.zIndex = window.getComputedStyle(page6).zIndex - 1;
                page8.style.zIndex = window.getComputedStyle(page7).zIndex - 1;
                page9.style.zIndex = window.getComputedStyle(page8).zIndex - 1;
                last.style.zIndex = window.getComputedStyle(page9).zIndex - 1;
                break;
                
            case 7:
                page6.classList.remove('flip');
                page6.style.zIndex = window.getComputedStyle(page5).zIndex + 1;
                page7.style.zIndex = window.getComputedStyle(page6).zIndex - 1;
                page8.style.zIndex = window.getComputedStyle(page7).zIndex - 1;
                page9.style.zIndex = window.getComputedStyle(page8).zIndex - 1;
                last.style.zIndex = window.getComputedStyle(page9).zIndex - 1;
                break;
            
            case 8:
                page7.classList.remove('flip');
                page7.style.zIndex = window.getComputedStyle(page6).zIndex + 1;
                page8.style.zIndex = window.getComputedStyle(page7).zIndex - 1;
                page9.style.zIndex = window.getComputedStyle(page8).zIndex - 1;
                last.style.zIndex = window.getComputedStyle(page9).zIndex - 1;
                break;
            
            case 9:
                page8.classList.remove('flip');
                page8.style.zIndex = window.getComputedStyle(page7).zIndex + 1;
                page9.style.zIndex = window.getComputedStyle(page8).zIndex - 1;
                last.style.zIndex = window.getComputedStyle(page9).zIndex - 1;
                break;
            
            case 10:
                page9.classList.remove('flip');
                page9.style.zIndex = window.getComputedStyle(page8).zIndex + 1;
                last.style.zIndex = window.getComputedStyle(page9).zIndex - 1;
                break;
            
            case 11:
                open();
                last.classList.remove('flip');
                last.style.zIndex = window.getComputedStyle(page9).zIndex + 1;
                break;

            default:
                throw new Error('Unknown State');
        }
        currentPage--;
    }
}