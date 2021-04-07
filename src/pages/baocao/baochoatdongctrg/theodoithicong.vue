<template>
  <div>
    <!-- block1 -->
    <div>
      <MucBC />
    </div>
    <!-- block 2 -->
    <div>
      <div class="card-tvgs">
        <b-card title="Title">
          <b-card-text> This is a wider card </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="Title">
          <b-card-text> This is a wider card </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="Title">
          <b-card-text> This is a wider card </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="Title">
          <b-card-text> This is a wider card </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="Title">
          <b-card-text> This is a wider card </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="Title">
          <b-card-text> This is a wider card </b-card-text>
        </b-card>
      </div>
    </div>
    <!-- block 3 -->
    <div>
      <div class="btn-add-cv theodoi-thicong">
        <b-button size="sm" class="mb-2 icon-tvgs">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
        </b-button>
      </div>

      <div class="theodoi-thicong icon-date">
        <b-form-datepicker
          id="datepicker-placeholder"
          placeholder="Choose a date"
          locale="vi"
          style="left :3%"
        ></b-form-datepicker>
      </div>

      <div class="theodoi-thicong icon-date">
        <b-form-datepicker
          id="datepicker-placeholder"
          placeholder="Choose a date"
          locale="vi"
          style="left :3%"
        ></b-form-datepicker>
      </div>

      <div class="select-nhansu theodoi-thicong">
        <b-dropdown id="dropdown-form" text="Theo nhân sự" ref="dropdown">
          <b-dropdown-form>
            <b-form-group>
              <b-form-input> </b-form-input>
              <div>
                <b-form-select
                  v-model="selected"
                  :options="options"
                  multiple
                  :select-size="4"
                ></b-form-select>
              </div>
            </b-form-group>
          </b-dropdown-form>
        </b-dropdown>
      </div>

      <div class="select-duan theodoi-thicong">
        <b-dropdown id="dropdown-form" text="Theo dự án" ref="dropdown">
          <b-dropdown-form>
            <b-form-group>
              <b-form-input> </b-form-input>
              <div>
                <b-form-select
                  v-model="selected"
                  :options="options"
                  multiple
                  :select-size="4"
                ></b-form-select>
              </div>
            </b-form-group>
          </b-dropdown-form>
        </b-dropdown>
      </div>

      <div class="select-loai theodoi-thicong">
        <b-dropdown id="dropdown-form" text="Theo dự án" ref="dropdown">
          <b-dropdown-form>
            <b-form-group>
              <b-form-input> </b-form-input>
              <div>
                <b-form-select
                  v-model="selected"
                  :options="options"
                  multiple
                  :select-size="4"
                ></b-form-select>
              </div>
            </b-form-group>
          </b-dropdown-form>
        </b-dropdown>
      </div>

      <div class="search-baoc theodoi-thicong">
        <b-input-group size="sm" class="mb-2 icon-tvgs">
          <b-form-input type="search" placeholder="Search terms"></b-form-input>
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>

          <b-input-group-prepend is-text>
            <b-icon icon="arrow-repeat"></b-icon>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script>
import MucBC from "./comp_hoatdongctrg/muc_baocao";
export default {
  components: {
    MucBC,
  },
};
</script>

<style scoped>
.card-tvgs {
  float: left;
  padding: 20px;
}

.icon-tvgs .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;

}
.theodoi-thicong {
  float: left;
  padding: 5px;

}

</style>