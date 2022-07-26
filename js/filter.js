const list = document.querySelector('.filter__list');
const items = document.querySelectorAll('.portfolio__column')
const listItems = document.querySelectorAll('.filter__item')

function filter(){
	list.addEventListener('click', event =>{
		const targetFilter = event.target.dataset.filter;
		const target = event.target
		if(target.classList.contains('filter__item')){
			listItems.forEach(listItem => {
			listItem.classList.remove('active')
			})
			target.classList.add('active');
		}

		switch(targetFilter){
			case 'all':
				getItems('portfolio__column');
			break;
			case 'web':
				getItems(targetFilter);
			break;
			case 'apps':
				getItems(targetFilter);
			break;
			case 'other':
				getItems(targetFilter);
			break;
		}
	})
}
filter()

function getItems(className){
	items.forEach(item => {
		if(item.classList.contains(className)){
			item.style.display = 'flex';
		} else{
			item.style.display = 'none';
		}
	})
}