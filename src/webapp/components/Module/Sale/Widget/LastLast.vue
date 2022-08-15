
<template>
  <div class="card h-100 mb-0"
    data-b-loc-uid="c1f7e3da-f1a7-4976-88a4-897056897c4a">
    <div class="card-header"
        data-b-loc-uid="cd4c2712-cf00-46d3-baa0-63a741f75022">
        <h4 class="card-title text-secondary "
            data-b-loc-uid="7453a6df-4c3f-45b0-9738-d212192eae91">Sales</h4>
        <h6 class="card-subtitle text-muted mb-0 op-5"
            data-b-loc-uid="e406b2e6-9695-4185-9af5-f62757bff4dc">Last Created and Verified</h6>
    </div>
    <div class="card-table mb-0 p-2"
        data-b-loc-uid="8a99e418-0d18-4ad2-8b1d-4d1e78b0db9a">
        <table class="table table-sm table-hover align-middle h-100"
            data-b-loc-uid="478898ce-0ae5-4dbd-be38-aa3611069669">
            <thead class="thead-light"
                data-b-loc-uid="f68621cd-e1a2-439d-9d29-844cd9708eb9">
                <tr data-b-loc-uid="a450ba3c-b772-48da-9675-46b8e9198581">
                    <th data-b-loc-uid="7c44c3f9-e01d-4d93-a55f-30fbdeed84cc">Customer</th>
                    <th data-b-loc-uid="bef2439c-1874-42ec-9a55-fc875cfb8f7b">Email</th>
                    <th class="text-center"
                        data-b-loc-uid="ef07f8a6-62a9-49af-b370-8c1169f7f567">Status</th>
                    <th data-b-loc-uid="0a424900-8744-4adc-86d1-947af0d7eb9e">Created</th>
                    <th class="text-right"
                        data-b-loc-uid="e887c541-37fa-4d89-a811-706b5e3c6037">Total</th>
                </tr>
            </thead>
            <tbody class
                data-b-loc-uid="26de9241-3fdb-4ae3-8438-6281de9794a2">
                <tr v-for="i in 5"
                    data-b-loc-uid="d8d7b483-ac67-44aa-9a63-c0fd0b18636e">
                    <td data-b-loc-uid="e3a35028-6ec6-4e12-8c39-49869f34b972">
                        <div class="media"
                            data-b-loc-uid="1c066b56-53c4-4dcc-b83d-60a963cd0a50">
                            <div class="profile-picture   float-right d-flex mr-3"
                                data-b-loc-uid="17506883-975a-4574-ab9a-e6274cb96161">
                                <i class="la la-image text-30 text-muted"
                                    data-b-loc-uid="5d2dffe7-0bbd-41a3-a180-88b77686dd28" />
                            </div>
                            <div class="media-body"
                                data-b-loc-uid="f7a433e0-88b2-4783-a37e-bc7e793766eb">
                                <div class="heading mt-1"
                                    data-b-loc-uid="b37dbd35-8f8a-4765-b5d5-7df735ead579">
                                    Donny Lehner
                                </div>
                                <div class="text-muted"
                                    data-b-loc-uid="f107a9df-e5d5-471d-ad35-a0497c140ffc">Corporate Creative Facilitator</div>
                            </div>
                        </div>
                    </td>
                    <td class="font-14"
                        data-b-loc-uid="729a68fb-d929-4ada-a911-abdd3e9643a1">
                        daphne.murray@example.com
                    </td>
                    <td class="text-center"
                        data-b-loc-uid="4a92d0e3-5511-45fb-bcfe-e75f9231d57b">
                        <b-badge variant="secondary"
                            class="badge-outlined"
                            data-b-loc-uid="a24e35a1-6827-41a3-8aa5-44162cb2f66a">Approved</b-badge>
                    </td>
                    <td class="font-14"
                        data-b-loc-uid="31bd785f-63b4-4369-ab85-d22350c4f366">07-02-2018 </td>
                    <td class="text-right"
                        data-b-loc-uid="4c20de0f-9fa9-4a37-961d-b77692d8f8c6">
                        $100
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>
</template>
<script>
import ButtonGroup from '@/components/Base/ActionButton/ButtonGroup'

export default {
  components: {
    ButtonGroup
  }
}

</script>
