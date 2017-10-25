import { HTTP } from '../resources/resources'

export default {
  GET_APP_BY_STATE: async () => {
    const res  = () => {
      return new Promise((resolve, reject) => {
        HTTP.post('/state/userdetail')
        .then((res) => { resolve(res.data) })
        .catch((e) => { reject(e) })
      })
    }

    return await res()
  },

  APP_BY_FACULTY_STATE : async () => {
    const res = () => {

      return new Promise((resolve, reject) => {
        HTTP.post('faculty/gender/userdetail')
        .then((res) => {
          let data = res.data
          ,default_res = new Array()

          for(let k = 0; k < data.length; k++)
          {
            let objct = data[k]
            let state_pointer = objct.description_one
            let fclty_pointer = objct.description_two
            let def_ = {'state':'', 'faculties':[{ 'name':'','departments':[] }]  }
            let def_dept = {'name':'','male':0, 'female':0,'total':0}
            let res_length = default_res.length

            if(k === 0){ 
              def_.state = state_pointer
              def_.faculties[0].name = fclty_pointer
              def_dept.name = objct.description_three
              def_dept.male = objct.male
              def_dept.female = objct.female
              def_dept.total = objct.total
              def_.faculties[0].departments.push(def_dept)

              //push to default response
              default_res.push(def_)
            }else if(k > 0){
              let prev_objct = data[k-1]
              let prev_state_pointer = prev_objct.description_one
              let prev_fclty_pointer = prev_objct.description_two

              if(prev_state_pointer === state_pointer && prev_fclty_pointer === fclty_pointer)
              {
                let pos = default_res[res_length-1]
                let fac_length = pos.faculties.length
                def_dept.name = objct.description_three
                def_dept.male = objct.male
                def_dept.female = objct.female
                def_dept.total = objct.total
                pos.faculties[fac_length-1].departments.push(def_dept)

              }else if(prev_state_pointer === state_pointer && prev_fclty_pointer !== fclty_pointer){

                let fac_ =  { 'name':'','departments':[] } 
                let pos = default_res[res_length-1]
                def_dept.name = objct.description_three
                def_dept.male = objct.male
                def_dept.female = objct.female
                def_dept.total = objct.total
                fac_.departments.push(def_dept)
                fac_.name = objct.description_two
                pos.faculties.push(fac_)
                         
              }else if(prev_state_pointer !== state_pointer && prev_fclty_pointer !== fclty_pointer){

                def_.state = state_pointer
                def_dept.name = objct.description_three
                def_dept.male = objct.male
                def_dept.female = objct.female
                def_dept.total = objct.total
                def_.faculties[0].name = fclty_pointer
                def_.faculties[0].departments.push(def_dept)

                default_res.push(def_)
              }
            }
            
            
          }
          resolve(default_res)
        })
        .catch((err) => { reject(err) })
      })

    }

    return await res()
  }
}