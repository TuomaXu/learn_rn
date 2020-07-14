
export default {
    namespace: 'user',
    state: {
        name:'tom'
    },
    reducers: {
      t1:(state, { payload: name })=>{
        console.log(name);
        console.log('t1');
        return {name}
      },
    },
    effects: {
        *fetch(action, { call, put, select }) {
            //使用select获取state，但不能修改state值
            console.log(action);
            console.log('e1');
            yield plog(1);
            console.log('e2');
            yield put({type:'t1',payload:'tom2'});
            console.log('e3');
        },
        *f1(action, effect) {
            console.log(effect);
            console.log(action);
            // console.log('e1');
            // yield plog(1);
            // console.log('e2');
            // yield put({type:'t1',payload:'tom2'});
            // console.log('e3');
        },
      },
  };

  async function plog(x) {
      return new Promise((callBack)=>{
          setTimeout(()=>{
              console.log(x);
              callBack();
          },1000);
      })
  }