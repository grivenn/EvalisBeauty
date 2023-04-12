var lang = {
    'mobile':['+30 2241 095999', '', ''],
    'menu_1':['Брови', '', ''],
    'menu_2':['Ресницы', '', ''],
    'menu_3':['Макияж', '', ''],
    'menu_4':['Перманентный макияж', '', ''],
    'menu_5':['Эпиляция', '', ''],
    'menu_6':['Массаж', '', ''],
    'menu_7':['Чистка лица', '', ''],
    'menu_8':['Новости', '', ''],
    'menu_9':['Прайс-лист', '', ''],
    'menu_10':['Наши сертификаты', '', ''],
    'menu_11':['О салоне', '', ''],
    'welcome':['Добро пожаловать в профессиональный', '', ''],
    'salone':['Салон красоты', '', ''],
    'inrhodes':['На Родосе', '', ''],
    'salonedescr':[' - это салон красоты бизнес-класса. Мастера салона дарят посетителям уверенность в себе и индивидуальный стиль. Здесь представлены все самые востребованные услуги бьюти-индустрии.', '', ''],
    'about':['О салоне', '', ''],
};


$(document).ready(function() {
	$('.input#lng').on("change", (function(){
		langChange(this.value);			
	}));	
});

function langChange(langNum) {

    for (const key in lang) {
        if (lang.hasOwnProperty(key)) {
            const element = lang[key];
            $(`#${key}`).val(element);
        }
    }
	$('.comments, .tab-header, .tab-txt').each(function(index, element){
		$(this).html(arrLang[langNum][$(this).attr('id')]);
	});	
}