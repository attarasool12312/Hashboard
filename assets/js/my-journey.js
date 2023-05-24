var customerGoals = 1;

function addCustomerGoals() {

  customerGoals++;
  $('.customerGoals').append(`<input type="text" name="text" id="customer-goals" class="mt-2" placeholder="Goal ${customerGoals}">`);
}

function addPainPints() {
  $('.painPints').append(`<div class="pain-pints-input mt-2">
                          <input type="text" name="text" id="text" placeholder="Pain Pints">
                          <textarea name="description" id="description" cols="30" rows="1" placeholder="Description"></textarea>
                          <div class="input-hover-icon">
                            <i class="icon icon-add-stage"></i>
                            <i class="icon icon-settings"></i>
                            <i class="icon icon-close-stage"></i>
                          </div>
                        </div>`);
}


function addTouchpointActivity() {

  $('.touchpointActivity').append(`<div class="touchpoint-activity-input mt-2">
  <select name="language" id="language">
    <option value="English">Email</option>
    <option value="Urdu">Touchpoint</option>
  </select>
  <input type="text" placeholder="Email Invitaion">
  <div class="input-hover-icon">
  <i class="icon icon-add-stage"></i>
  <i class="icon icon-settings"></i>
  <i class="icon icon-close-stage"></i>
</div>
</div>`);
}

function addDepartmentChannels() {

  $('.departmentChannels').append(`<div class="department-channels-input mt-2">
  <select name="language" id="language">
    <option value="English">Sales</option>
    <option value="Urdu">Department</option>
  </select>
  <input type="text" placeholder="Account Manager">
  <div class="input-hover-icon">
    <i class="icon icon-add-stage"></i>
    <i class="icon icon-settings"></i>
    <i class="icon icon-close-stage"></i>
  </div>
</div>`);
}