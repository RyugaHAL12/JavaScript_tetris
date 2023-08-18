//--定数--//
//	ステージ系
const StageSetting = {
	BlockSize : 24,		//	1ブロックのサイズ
	StageRows : 22,		//	ステージの高さ(20ラインをステージとし、上下1ラインを当たり判定とブロックコピー用)
	StageCols : 12,		//	ステージの幅
	ScreenWidth : BlockSize * StageCols,
	ScreenHeight : BlockSize * StageRows,
};
// const BLOCK_SIZE = 24;	//	1ブロックのサイズ
// const BLOCK_RAWS = 22;	//	ステージの高さ(20ラインをステージとし、上下1ラインを当たり判定とブロックコピー用)
// const BLOCK_COLS = 12;	//	ステージの幅

//	ゲームの状態
const GameStatus = {
	GameOver : 0,
	Game : 1,
	Effect : 2,
};

//	ブロックの状態
const BlockStatus = {
	Non : 0,		//	存在しない
	Normal : 1,		//	通常時(動かせる)
	Lock : 2,		//	ロックした(動かせない)
	Clear : 3,		//	消去するブロック
	Wall : 9,		//	壁
};

//	色
const Colors = {
	Background : "#ddd",			//	背景色
	Gameover : "palevioletred",		//	ゲームオーバー時
	Block : "steelblue",			//	操作ブロックの色
	Lockedblock : "lightslategray",	//	ロックしたブロックの色
	Error : "tomato",
	Effect1 : "whitesmoke",
	Effect2 : "#000",
}

//	ゲーム要素
const NextLevel = 10;		//	次のレベルまでの消去ライン数

//--Global--//
class Canvas{
	m_elmCanvas;
	m_canvasContext;
	
	constructor(){
		m_elmCanvas = document.getElementById('canvas');
		m_canvasContext = m_elmCanavs.getContext("2d");
	};
}

class Stage{
	m_Flame;
	m_Field;
	constructor(){
		m_Flame = new Array(StageSetting=>StageCols);
		m_Field = new Array(StageSetting=>StageCols);
	};
}

class Block{
	m_Size;
	m_Type;
	m_Status;
	m_X;
	m_Y;

	constructor(){
	};
}

let elmCanvas;									//	キャンバス要素
let canvasContext;								//	キャンバスコンテキスト
let stageFrame = new Array(Stage=>StageCols);	//	ゲームステージ枠(壁の情報のみ・固定)
let fieldFrame = new Array(Stage=>StageCols);	//	ゲーム中のステージ枠とブロック表示用
let blockSize;									//	ブロックサイズ	
let fallSpeed;									//	落下速度
let gameFrameNum;								//	ゲームフレーム番号
let fallBlockType = new Array();				//	落下してくるブロックの種類
let opeBlock = new Array();						//	操作中のブロック


function init(){
	clearTimeout(timer1);
	FPS = 30;
	clearLine = 0;

	//	キャンバスの設定
	let canvas = new Canvas();
	canvas.m_elmCanvas.width = StageSetting=>ScreenWidth;
	canvas.m_elmCanvas.height = StageSetting=>ScreenHeight;
	
}