;(function () {
  /* 菜单按钮点击事件 */
  let menuHandler = document.querySelector('.menu-handler')
  let navList = document.querySelector('#nav')
  menuHandler.addEventListener('click', () => {
    navList.classList.toggle('navShow')
  })

  /* 搜索按钮点击事件 */
  let searchBox = document.querySelector('#search-top')
  let searchIcon = document.querySelector('#search-top .icon-search')
  searchIcon.addEventListener('click', function () {
    // 还未激活则激活
    if (!searchBox.classList.contains('search-active')) {
      searchBox.classList.add('search-active')
    } else {
      // 已经激活，再次点击就发起ajax请求
    }
  })
  // 清除按钮
  let clearBtn = document.querySelector('#search-top .search-clear')
  let searchInput = document.querySelector('#search-top .search-input')
  clearBtn.addEventListener('click', () => {
    // 输入框不为空，清空
    if (searchInput.value.trim() !== '') {
      searchInput.value = ''
    } else {
      // 输入框为空，关闭激活状态
      searchBox.classList.remove('search-active')
    }
  })
})()
