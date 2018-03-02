export function newsAdd(news)
{
	return {
		type: 'ADD_NEWS',
		payload: news
	}
}