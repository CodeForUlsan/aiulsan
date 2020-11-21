/* 함수 사용법
kakaoshare(가게이름, 가게웹사이트 주소에 들어가는 폴더명, 가게설명, 톡메세지에 쓰일 확장자를 포함한 이미지 파일 이름);
ex)kakaoshare("행복막창", "행복막창", "막창의 명가 행복막창", "logoimage.png");
*/
// 카카오톡 공유하기 기능
function phpforKakaoshare(linkTitle, linkUrl, linkDescription, imgFileUrl)
{
	Kakao.init('e82e75647f66904dfaa2ef1558cd2926');
	Kakao.Link.createDefaultButton({
		container: '#kakao-link-btn',
		objectType: 'feed',
		content: {
			title: linkTitle,
			description: linkDescription,
			imageUrl: imgFileUrl,
			link: {
				mobileWebUrl: linkUrl,
				webUrl: linkUrl
			}
		},
		buttons: [
			{
				title: '웹으로 보기',
				link: {
					mobileWebUrl: linkUrl,
					webUrl: linkUrl
				}
			},
		]
	});
}