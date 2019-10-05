import React from "react";
import { Modal } from "react-native";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AlertPro from "../src";

Enzyme.configure({ adapter: new Adapter() });

describe("React Native AlertPro", () => {
  describe("Render", () => {
    it("should render correctly with no props", () => {
      const wrapper = shallow(<AlertPro />);
      expect(wrapper).toMatchSnapshot();
    });

    it("should render correctly with given props", () => {
      const wrapper = shallow(
        <AlertPro
          customStyles={{ title: { fontSize: 22 } }}
          title="Delete confirmation"
          message="Are you sure to delete the entry?"
          showCancel
          showConfirm
          textCancel="Cancel"
          textConfirm="Delete"
          closeOnPressMask={false}
          onCancel={() => {}}
          onConfirm={() => {}}
          onClose={() => {}}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Method", () => {
    let wrapper;
    const onClose = jest.fn();
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    beforeAll(() => {
      wrapper = shallow(<AlertPro onClose={onClose} onCancel={onCancel} onConfirm={onConfirm} />);
    });

    it("should method open called", () => {
      wrapper.instance().open();
      expect(wrapper.state().visible).toBe(true);
    });

    it("should method close called", () => {
      wrapper.instance().close();
      expect(wrapper.state().visible).toBe(false);
    });

    it("should onClose callback function called", () => {
      wrapper.instance().close();
      expect(onClose).toHaveBeenCalled();
    });

    it("should onCancel function called", () => {
      wrapper.findWhere(node => node.prop("testID") === "buttonCancel").simulate("Press");
      expect(onCancel).toHaveBeenCalled();
    });

    it("should onConfirm function called", () => {
      wrapper.findWhere(node => node.prop("testID") === "buttonConfirm").simulate("Press");
      expect(onConfirm).toHaveBeenCalled();
    });

    it("should onRequestClose called", () => {
      wrapper
        .find(Modal)
        .props()
        .onRequestClose();
      expect(onClose).toHaveBeenCalled();
    });

    afterAll(done => {
      done();
    });
  });
});
