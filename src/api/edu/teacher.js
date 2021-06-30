import request from '@/utils/request'

export default {
    //1 讲师列表
    getTeacherListPage(current,limit,teacherQuery) {
        return request({
            // url: '/eduservice/teacher/pageTeacherCondition',
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            //teacherQuery条件对象,转成json传输
            data:teacherQuery
        })
    },
    //删除讲师
    deleteTeacherId(id) {
        return request({
            url: `/eduservice/teacher/removeById/${id}`,
            method: 'delete',
        })
    },

    //添加讲师
    addTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data:teacher
        })
    },
    //根据id查询
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get',
        })
    },
    //修改讲师
    updateTeacherInfo(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
        })
    }
}
