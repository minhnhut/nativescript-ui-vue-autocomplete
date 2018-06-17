const Vue = require("nativescript-vue");
require("./nativescript-vue/autocomplete-directives.js");
const ViewModel = require("./nativescript-vue/model.js");


new Vue({

  template: `
    <Page class="page" @loaded="onPageLoaded">
      <ActionBar title="Home" class="action-bar" />
      <ScrollView>
        <StackLayout class="home-panel">
          <!--Add your page content here-->
          <RadAutoCompleteTextView :items="viewModel.dataItems">
            <SuggestionView >
              <StackLayout orientation="vertical">
                  <Label :text="text"></Label>
              </StackLayout>
            </SuggestionView>
          </RadAutoCompleteTextView>
          <Label textWrap="true" text="Play with NativeScript!" class="h2 description-label" />
          <Label textWrap="true" text="Write code in the editor or drag and drop components to build a NativeScript mobile application." class="h2 description-label" />
          <Label textWrap="true" text="Scan the QR code with your mobile device and watch the changes sync live while you play with the code." class="h2 description-label" />
        </StackLayout>
      </ScrollView>
    </Page>
  `,

  data: {
    tags: ['nhut', 'vi', 'alien'],
    viewModel: null
  },

  // methods: {
  //   onPageLoaded(args) 
  // }

  created() {
      // var page = args.object;
      //page.bindingContext = new ViewModel(args);
      this.viewModel = new ViewModel();
  }

}).$start();