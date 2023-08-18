class Canvas{
	m_elem;
	m_context;

	constructor(){
		m_elem = document.getElementById('canvas');
		m_elem.width = 500;
		m_elem.height = 500;
		m_context = m_elem.getContext("2d");

	}
}