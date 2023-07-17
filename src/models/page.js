class Page {
  constructor() {
    this.id = '';
    this.props = {};
    this.title = '';
    this.desc = '';
    this.coverImg = '';
    this.isTemplate = '';
    this.isHot = false;
    this.isNew = false;
    this.author = '';
    this.copiedCount = 0;
    this.status = 0;
    this.user = {
      gender: '',
      nickName: '',
      picture: '',
      useName: '',
    }
  }
}

export default Page;