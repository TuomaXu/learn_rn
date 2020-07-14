
export default {
    namespace: 'counter',
    state: {
        count:0,
    },
    //state只能被reducers里面的函数更新
    //reducers只能写纯函数---固定的输入，有固定的输出
    reducers: {
        add(state,action){
            const count  = state.count;
            console.log(action.id);
            // state.count = 2; xxx
            const s = {
                count:count+1,
            }
            return s;
        },
        del(state,action){
            const { count } = state;
            return {
                count:count-1,
            }
        },
        zero(state,action){
            return {
                count:0,
            }
        },
        update(state,action){
            //一般reducers里面就写这一个方法
            return Object.assign({},state,action.payload);
        }
    },
    effects: {
        *a_add(action, { call, put, select }){
            console.log('1');
            yield call(plog,'2');
            console.log('3');
            yield put({
                type:'add'
            });
        },
        *a_add2(action, { call, put, select }){
            console.log('1');
            yield call(plog,'2');
            console.log('3');
            const count =yield select((store)=>{
                console.log(store)
                console.log('4');
                return store.counter.count;
            });
            console.log('count:'+count);
            yield put({
                type:'update',
                payload:{
                    count:count+2,
                }
            });
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