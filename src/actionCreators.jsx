export function openPopup() {
  return {
    type: 'OPEN_POPUP',
  };
}

export function closePopup() {
  return {
    type: 'CLOSE_POPUP',
  };
}

export function fetchDirections() {
  return {
    type: 'FETCH_DIRECTIONS',
  };
}
export function addDirection(direction) {
  return {
    type: 'ADD_DIRECTION',
    payload: { direction },
  }
}

export function remDirection(country) {
  return {
    type: 'REM_DIRECTION',
    payload: { country },
  }
}

export function deleteDirection(id) {
  return {
    type: 'DEL_DIRECTION',
    payload: { id }
  }
}

export function companyName(Name) {
  return {
    type: 'COMPANY_NAME_DIRECTIONS',
    payload: { Name }
  }
}

export function addFooterBlock(footerblocks) {
  return {
    type: 'FOOTER_BLOCK_FETCH_DIRECTIONS',
    payload: { footerblocks }
  }
}

export function deleteFooter(id) {
  return {
    type: 'DEL_FOOTER',
    payload: { id }
  }

} export function themeStyle(theme) {
  return {
    type: 'THEME_STYLE',
    payload: { theme }
  }
}
