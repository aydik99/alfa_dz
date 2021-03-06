const initialState =  [
                {
                    title: 'Facebook предлагает пользователям установить на телефон бесплатный VPN. Лучше этого не делать',
                    img: 'http://vanin-invest.com/wp-content/uploads/2016/11/xfacebook_logo_20130503.jpg.pagespeed.ic.CL8UvlT17I.jpg',
                    descr: 'В мобильном клиенте Facebook появилась кнопка «Protect» («Защитить»), которая ведет пользователей напрямую на страницу приложения Onavo Protect в App Store.',
                    f_desct: 'В мобильном клиенте Facebook появилась кнопка «Protect» («Защитить»), которая ведет пользователей напрямую на страницу приложения Onavo Protect в App Store.В мобильном клиенте Facebook появилась кнопка «Protect» («Защитить»), которая ведет пользователей напрямую на страницу приложения Onavo Protect в App Store.'
                },
                {
                    title: 'Сноубордисты — самые необычные звезды Олимпиады',
                    img: 'http://wallpaperscraft.ru/image/snoubord_snoubordist_sneg_doska_sport_28787_1920x1200.jpg',
                    descr: 'Они просыпают старт, теряют куртки, твитят между заездами — и выполняют супертрюки',
                     f_desct: 'Они просыпают старт, теряют куртки, твитят между заездами — и выполняют супертрюки Они просыпают старт, теряют куртки, твитят между заездами — и выполняют супертрюки Они просыпают старт, теряют куртки, твитят между заездами — и выполняют супертрюки'
                },
                {
                    title: 'Белый дом определился, что делать с МКС. Станцию отдадут бизнесменам',
                    img: 'http://progress.online/sites/default/files/roskosmos_predstavit_virtualnuju_model_mks_na_maks-2017.jpg',
                    descr: 'Международная космическая станция на низкой земной орбите используется с 1998 года.',
                     f_desct: 'Международная космическая станция на низкой земной орбите используется с 1998 года. Международная космическая станция на низкой земной орбите используется с 1998 года. Международная космическая станция на низкой земной орбите используется с 1998 года. Международная космическая станция на низкой земной орбите используется с 1998 года.'
                }
            ];

export default function news(state = initialState, action)
{
	switch(action.type)
	{
		case 'ADD_NEWS':
			return {...state, news: action.payload}
		default:
		return state
	}

	return state; 
}