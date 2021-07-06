
<template>
<div class="card"
    style="min-height: 454px;">
    <div class="card-header d-flex ui-sortable-handle">
        <span><i class="lnr lnr-calendar-full"> </i>To Do List</span>
        <div class="form-actions-sm w-100">
            <div class="input-group mb-0">
                <div class="form-line">
                    <input type="text"
                        name="task"
                        class="form-control date"
                        placeholder="">
                    </input></div>
                <span class="input-group-append">
                    <button type="button"
                        class="btn btn-sm btn-grad-kashmir add-todo-list">Add Task</button>
                </span>
            </div>
        </div>

    </div>
    <div class="body scrollable ps ps--active-y"
        style="max-height: 300px;      ">
        <ul class="todo-list ui-sortable"
            id="todo">

            <li class="d-flex">
                <span class="handle ui-sortable-handle">
                    <i class="fa fa-ellipsis-v" />
                    <i class="fa fa-ellipsis-v" />
                </span>
                <input type="checkbox"
                    value=""
                    name>
                <span class="text"> Add Zoila to team members.</span>

                <div class="tools mr-0"
                    style="cursor: pointer">
                    <i class="fa fa-edit" />
                    <i class="fa fa-trash-o" />
                </div>
                <small class=" ml-auto label label-outline-info border-grey"><i class="fa fa-clock-o" /> 3 days </small>
                </input>
            </li>

            <li class="d-flex">
                <span class="handle ui-sortable-handle">
                    <i class="fa fa-ellipsis-v" />
                    <i class="fa fa-ellipsis-v" />
                </span>
                <input type="checkbox"
                    value=""
                    name>
                <span class="text"> Place call to Laurel.</span>

                <div class="tools mr-0"
                    style="cursor: pointer">
                    <i class="fa fa-edit" />
                    <i class="fa fa-trash-o" />
                </div>
                <small class=" ml-auto label label-outline-info border-grey"><i class="fa fa-clock-o" /> 3 mins </small>
                </input>
            </li>

            <li class="d-flex">
                <span class="handle ui-sortable-handle">
                    <i class="fa fa-ellipsis-v" />
                    <i class="fa fa-ellipsis-v" />
                </span>
                <input type="checkbox"
                    value=""
                    name>
                <span class="text"> Create new project structure.</span>

                <div class="tools mr-0"
                    style="cursor: pointer">
                    <i class="fa fa-edit" />
                    <i class="fa fa-trash-o" />
                </div>
                <small class=" ml-auto label label-outline-info border-grey"><i class="fa fa-clock-o" /> 3 mins </small>
                </input>
            </li>

            <li class="d-flex">
                <span class="handle ui-sortable-handle">
                    <i class="fa fa-ellipsis-v" />
                    <i class="fa fa-ellipsis-v" />
                </span>
                <input type="checkbox"
                    value=""
                    name>
                <span class="text"> Create a new task.</span>

                <div class="tools mr-0"
                    style="cursor: pointer">
                    <i class="fa fa-edit" />
                    <i class="fa fa-trash-o" />
                </div>
                <small class=" ml-auto label label-outline-info border-grey"><i class="fa fa-clock-o" /> 3 mins </small>
                </input>
            </li>

            <li class="d-flex">
                <span class="handle ui-sortable-handle">
                    <i class="fa fa-ellipsis-v" />
                    <i class="fa fa-ellipsis-v" />
                </span>
                <input type="checkbox"
                    value=""
                    name>
                <span class="text"> Follow-up meeting.</span>

                <div class="tools mr-0"
                    style="cursor: pointer">
                    <i class="fa fa-edit" />
                    <i class="fa fa-trash-o" />
                </div>
                <small class=" ml-auto label label-outline-info border-grey"><i class="fa fa-clock-o" /> 3 mins </small>
                </input>
            </li>

            <li class="d-flex">
                <span class="handle ui-sortable-handle">
                    <i class="fa fa-ellipsis-v" />
                    <i class="fa fa-ellipsis-v" />
                </span>
                <input type="checkbox"
                    value=""
                    name>
                <span class="text"> Follow-up meeting.</span>

                <div class="tools mr-0"
                    style="cursor: pointer">
                    <i class="fa fa-edit" />
                    <i class="fa fa-trash-o" />
                </div>
                <small class=" ml-auto label label-outline-info border-grey"><i class="fa fa-clock-o" /> 3 mins </small>
                </input>
            </li>

            <li class="d-flex">
                <span class="handle ui-sortable-handle">
                    <i class="fa fa-ellipsis-v" />
                    <i class="fa fa-ellipsis-v" />
                </span>
                <input type="checkbox"
                    value=""
                    name>
                <span class="text"> Create new project structure.</span>

                <div class="tools mr-0"
                    style="cursor: pointer">
                    <i class="fa fa-edit" />
                    <i class="fa fa-trash-o" />
                </div>
                <small class=" ml-auto label label-outline-info border-grey"><i class="fa fa-clock-o" /> 3 days </small>
                </input>
            </li>

        </ul>
        <div class="ps__rail-x"
            style="left: 0px; bottom: 0px;">
            <div class="ps__thumb-x"
                tabindex="0"
                style="left: 0px; width: 0px;" />
        </div>
        <div class="ps__rail-y"
            style="top: 0px; height: 300px; right: 0px;">
            <div class="ps__thumb-y"
                tabindex="0"
                style="top: 0px; height: 211px;" />
        </div>
    </div>
    <div class="footer clearfix d-flex">

        <div class="box-tools ml-auto">
            <ul class="pagination pagination-sm mb-0">
                <li class="page-item"><a class="page-link"
                        href="#">«</a></li>
                <li class="page-item active"><a class="page-link"
                        href="#">1</a></li>
                <li class="page-item"><a class="page-link"
                        href="#">2</a></li>
                <li class="page-item"><a class="page-link"
                        href="#">3</a></li>
                <li class="page-item"><a class="page-link"
                        href="#">»</a></li>
            </ul>
        </div>

    </div>
</div>
</template>
<script>

/*
Render small list of todos
*/
export default {}

</script>


<style lang="scss" scoped>
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: auto;
}
.todo-list > li {
  border-radius: 2px;
  padding: 10px;
  background: #fdfdfd;
  margin-bottom: 2px;
  border-left: 1px solid #e6e7e8;
  border-bottom: 1px solid #ccc;
  color: #444;
}
.todo-list > li .label {
  margin-left: 10px;
  font-size: 11px;
  background-color: #f3f3f3;
  min-width: 90px;
}
.todo-list > li .tools {
  display: none;
  float: right;
  color: #dd4b39;
}
.todo-list > li:hover .tools {
  display: block;
}

</style>
