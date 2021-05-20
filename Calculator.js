'use strict';

function update( inpt ) // input tag を更新する関数
  {
    document.querySelector( 'input' ).value = inpt
  }

function append( inpt ) // 数字ボタンが押されたので「数字」や「+, -, *, /,」を後ろに追加する
  {
    document.querySelector( 'input' ).value += inpt
  }

function calc() // 「＝」ボタンが押されたので計算する
  {
  const clc = document.querySelector( 'input' ).value　// input に入力された値を計算する
    try {
      const nmb = new Function( 'return ' + clc )
      update( nmb().toString() )
    } catch( _error ) {
      update( _error ) // 計算に失敗した場合は、そのエラーの内容を表示する
    }
  }

  